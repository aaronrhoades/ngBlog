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
  [EnableCors("Development")]
  [Produces("application/json")]
  public class BlogController : ControllerBase
  {

    private readonly DataContext _context;

    public BlogController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<BlogPost>>> GetAllBlogs()
    {
      var blogs = await _context.blogs.ToListAsync();

      return Ok(blogs);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BlogPost>> GetBlogById(int id)
    {
      var blog = await _context.blogs.FindAsync(id);

      if (blog == null) {
        return NotFound();
      }

      return Ok(blog);
    }

    [HttpGet("BySlug/{slug}")]
    public async Task<ActionResult<BlogPost>> GetBlogBySlug(string slug)
    {
      var blog = await _context.blogs.SingleOrDefaultAsync(m => m.Slug == slug);

      if (blog == null)
      {
        return NotFound();
      }

      return Ok(blog);
    }

  }
}
