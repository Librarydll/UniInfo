using System.ComponentModel.DataAnnotations.Schema;
using UniInfo.Domain.Models.Common;

namespace UniInfo.Domain.Models
{
    [Table("Faculties")]
    public class Faculty : BaseEntity
    {
        public string Code { get; set; }
        public string FacultyNameRu { get; set; }
        public string FacultyNameUz { get; set; }
        public string Direction { get; set; }
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
        public int UniversityId { get; set; }

        public University University { get; set; }
        public Subject Subject { get; set; }
    }
}
