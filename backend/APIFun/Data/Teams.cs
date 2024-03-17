using System.ComponentModel.DataAnnotations;

namespace APIFun.Data
{
    public class Teams
    {
        // Primary key for the BowlingLeague
        [Key]
        [Required]
        public int TeamID { get; set; }

        // Bowler properties
        
        public string? TeamName { get; set; }
        
        public int CaptainID { get; set; }
    }
}
