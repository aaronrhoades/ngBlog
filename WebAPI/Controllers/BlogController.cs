using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
  [Route("[controller]")]
  [ApiController]
  [EnableCors("Development")] //(origins: "http://localhost:4200", headers: "*", methods: "*")
  public class BlogController : ControllerBase
  {

    private readonly DataContext _context;

    public BlogController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Blog>>> GetAllBlogs()
    {
      var blogs = await _context.blogs.ToListAsync();

      return Ok(blogs);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Blog>> GetBlogById(string id)
    {
      var blog = await _context.blogs.FindAsync(id);

      if (blog == null) {
        return NotFound();
      }

      return Ok(blog);
    }

  }
}
