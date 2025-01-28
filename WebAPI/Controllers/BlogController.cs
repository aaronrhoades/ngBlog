using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
  [Route("[controller]")]
  [ApiController]
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

  }
}
