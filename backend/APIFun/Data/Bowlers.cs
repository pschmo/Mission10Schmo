using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace APIFun.Data
{
    public class Bowlers
    {
        // Primary key for the BowlingLeague
        [Key]
        [Required]
        public int BowlerID { get; set; }

        // Bowler properties
        
        public string? BowlerLastName { get; set; }
       
        public string? BowlerFirstName { get; set; }
        public string? BowlerMiddleInit { get; set; }

        // Address properties
        
        public string? BowlerAddress { get; set; }
       
        public string? BowlerCity { get; set; }
        
        public string? BowlerState { get; set; }

        public string? BowlerZip { get; set; }
        // Phone number property

        public string? BowlerPhoneNumber { get; set; }

        // Team properties

        [ForeignKey("TeamID")]
        public int TeamID { get; set; }
        public Teams? Teams { get; set; }

    }
}
