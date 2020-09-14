using System;
using System.Collections.Generic;
using System.Text;

namespace UniInfo.Domain.Models.DTO
{
	public class FacultyDto
	{
        public string Code { get; set; }
        public string FacultyName { get; set; }
        public int Grant { get; set; }
        public int Contract { get; set; }
        public double GrantPass { get; set; }
        public double ContractPass { get; set; }
        public int EducationType { get; set; }
        public int Language { get; set; }
        public string Period { get; set; }
        public int AsFirst { get; set; }
        public int AsSecond { get; set; }
        public int AsThird { get; set; }
        public string UniversityNameRu { get; set; }
        public string UniversityNameUz { get; set; }
    }
}
