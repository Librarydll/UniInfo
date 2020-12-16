using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using UniInfo.Domain.Models.Common;

namespace UniInfo.Domain.Models
{
	[Table("Quizzes")]
	public class Quiz: BaseEntity
	{
		public string Question { get; set; }
		public string RightAnswer { get; set; }
		public string FirstAnswer { get; set; }
		public string SecondAnswer { get; set; }
		public string ThirdAnswer { get; set; }
		public string FourthAnswer { get; set; }
		public	int	Language { get; set; }
		public int Subject { get; set; }
		public string QuestionUniqueId { get; set; }
		/// <summary>
		/// get if quiz assosiates in both russian and uzbek languages
		/// </summary>
		public bool BothLanguages { get; set; }

	}
}
