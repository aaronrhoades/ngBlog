using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using WebAPI.Data;
using WebAPI.Extensions;
using WebAPI.Models;

var builder = WebApplication.CreateBuilder(args);

//add authentication

builder.Services.AddAuthorization();
builder.Services.AddAuthentication().AddCookie(IdentityConstants.ApplicationScheme)
    .AddBearerToken(IdentityConstants.BearerScheme);

builder.Services.AddIdentityCore<User>()
  .AddEntityFrameworkStores<DataContext>()
  .AddApiEndpoints();

//add CORS

builder.Services.AddCors(options =>
{
  options.AddPolicy("Development",
      policy =>
      {
        policy.WithOrigins("http://localhost:4200")
          .AllowAnyHeader()
          .AllowAnyMethod();
      });
});

// Add services to the container.

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<DataContext>(options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString), mySqlOptions => {
    mySqlOptions.SchemaBehavior(MySqlSchemaBehavior.Ignore);
  }));


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();

  app.ApplyMigrations();
}

// start example endpoint that requires authorization
app.MapGet("users/me", async (ClaimsPrincipal claims, DataContext context) =>
{
  string userId = claims.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;

  return await context.Users.FindAsync(userId);
})
.RequireAuthorization();
// end example endpoint that requires authorization

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors();

app.MapControllers();

app.MapIdentityApi<User>();

app.Run();
