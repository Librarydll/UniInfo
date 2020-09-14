using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using UniInfo.Domain.Models.Common;

namespace UniInfo.Domain.Models
{

    public class Subject: BaseEntity, ISubject<int>
    {
        public int FirstSubject { get; set; }
        public int SecondSubject { get; set; }
        public int ThirdSubject { get; set; }
        public string Certificate { get; set; }

        public int FacultyId { get; set; }

        public Faculty Faculty { get; set; }
    }
}
