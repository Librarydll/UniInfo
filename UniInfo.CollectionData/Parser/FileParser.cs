using HtmlAgilityPack;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using UniInfo.CollectionData.Models;

namespace UniInfo.CollectionData.Parser
{
	public class FileParser
	{
		public static IEnumerable<Rootobject> ParseToJson(string filepath)
		{
			using (var reader =new StreamReader(filepath))
			{
				var json = reader.ReadToEnd();
				var list = JsonConvert.DeserializeObject<IEnumerable<Rootobject>>(json);
				return list;
			}
		}

		public static IEnumerable<Rootobject> ParseHtml(string filepath)
		{
			ICollection<Rootobject> collection = new List<Rootobject>();

			var web = new HtmlWeb();
			var doc = web.Load("https://qabul.dtm.uz/");
			var uniSelect = doc.DocumentNode.Descendants("select").FirstOrDefault();
			var nodes = uniSelect.ChildNodes.Skip(2).Where((n, index) => index % 2!=0);
			foreach (var node in nodes)
			{
				var optionValue = node.GetAttributeValue("value", "0");

				collection.Add(new Rootobject
				{
					code =optionValue,
					unname = node.InnerText.Trim()
				});
			}
			return collection;
		}

		public static IEnumerable<Rootobject> UnionObjects(IEnumerable<Rootobject> listWithName,IEnumerable<Rootobject> listWithoutName)
		{
			var result = listWithoutName.Select(x => 
			{
				var obj = listWithName.Where(y => y.code == x.code).First();
				x.unname = obj.unname;
				return x;
			});

			return result;
		}
	}
}
