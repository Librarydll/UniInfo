using System;
using System.Collections.Generic;
using System.Text;

namespace UniInfo.Domain.Models.DTO
{
	public class UniversityDto
	{
        public int Id { get; set; }
        public string NameRu { get; set; }
        public string NameUz { get; set; }
        public int Location { get; set; }

        public ICollection<FacultyDto> Faculties { get; set; }
    }
}
