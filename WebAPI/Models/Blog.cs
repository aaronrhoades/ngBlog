using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
  public class Blog
  {
    [Key]
    public int Id { get; set; }
    public string Slug { get; set; } = "";
    public string? Title { get; set; }
    public string? Content { get; set; }
  }
}
