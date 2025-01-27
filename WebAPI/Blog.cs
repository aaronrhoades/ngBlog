using System.ComponentModel.DataAnnotations;

namespace WebAPI
{
  public class Blog
  {
    [Key]
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Content { get; set; }
  }
}
