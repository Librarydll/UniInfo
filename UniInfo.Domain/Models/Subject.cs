using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using UniInfo.Domain.Models.Common;

namespace UniInfo.Domain.Models
{
    //[Table("Subject")]

    public class Subject: BaseEntity
    {
        public int FirstSubject { get; set; }
        public int SecondSubject { get; set; }
        public int ThirdSubject { get; set; }
        public string Certificate { get; set; }

        public int FacultyId { get; set; }

        public Faculty Faculty { get; set; }
    }
}
