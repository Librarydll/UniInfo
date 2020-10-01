using System.ComponentModel.DataAnnotations.Schema;
using UniInfo.Domain.Models.Common;

namespace UniInfo.Domain.Models
{
    [Table("Faculties")]
    public class Faculty : BaseEntity
    {
        public string FacultyNameRu { get; set; }
        public string FacultyNameUz { get; set; }
        public string Code { get; set; }
        public int Grant { get; set; }
        public int Contract { get; set; }
        public double GrantPass { get; set; }
        public double ContractPass { get; set; }
        public int EducationType { get; set; }
        public int Language { get; set; }
        public string Period { get; set; }
        public int TotalApply { get; set; }
        public int UniversityId { get; set; }
        public University University { get; set; }
        public Subject Subject { get; set; }
    }
}
