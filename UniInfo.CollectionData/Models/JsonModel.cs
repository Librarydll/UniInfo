using System;
using System.Collections.Generic;
using System.Text;

namespace UniInfo.CollectionData.Models
{
	public class Rootobject
	{
		public string unname { get; set; }
		public string code { get; set; }
		public Facarray[] facarray { get; set; }
	}

	public class Facarray
	{
		public string name { get; set; }
		public int code { get; set; }
		public int g { get; set; }
		public int k { get; set; }
		public int all { get; set; }
		public string l { get; set; }
		public string t { get; set; }
	}
}
