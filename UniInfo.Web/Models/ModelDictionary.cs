using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UniInfo.Web.Models
{
	public interface ICode
	{
		public int Code { get; set; }
	}
	public class ModelDictionary:ICode
	{
		public string RuVersion { get; set; }
		public string UzVersion { get; set; }
		public int Code { get; set; }
	}


}
