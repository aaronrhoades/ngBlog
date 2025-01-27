using Microsoft.EntityFrameworkCore;

namespace WebAPI.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {

    }
    public DbSet<Blog> blogs { get; set; }
  }
}
