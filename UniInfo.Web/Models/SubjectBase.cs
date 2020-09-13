using System;
using System.Collections.Generic;
using System.Text;
using UniInfo.Domain.Models.Common;
using UniInfo.Web.Models;

namespace UniInfo.Domain.Models.DTO
{
	public class SubjectModel :ISubject<ModelDictionary>
	{
		public ModelDictionary FirstSubject { get; set; }
		public ModelDictionary SecondSubject { get; set; }
		public ModelDictionary ThirdSubject { get; set; }
	}
}
