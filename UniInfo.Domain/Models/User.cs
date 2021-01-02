using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using UniInfo.Domain.Models.Common;

namespace UniInfo.Domain.Models
{
    [Table("Users")]
    public class User : BaseEntity
    {
        public string Login { get; set; }
        public string PasswordHash { get; set; }
    }
}
