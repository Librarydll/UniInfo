﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using UniInfo.Domain.Models.Common;

namespace UniInfo.Domain.Models
{
    [Table("Universities")]
    public class University : BaseEntity
    {
        public string NameRu { get; set; }
        public string NameUz { get; set; }
        public int Location { get; set; }
        public string Faks { get; set; }
        public string WebPage { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string UniversityIndex { get; set; }
        public int Rating { get; set; }
        public bool IsNational { get; set; } = true;

        public ICollection<Faculty> Faculties { get; set; }
    }
}
