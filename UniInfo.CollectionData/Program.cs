using System;
using UniInfo.CollectionData.Parser;

namespace UniInfo.CollectionData
{
	class Program
	{
		static void Main(string[] args)
		{
			var jsonObject = FileParser.ParseToJson("a.json");
			var collection = FileParser.ParseHtml("uni.html");
			var result = FileParser.UnionObjects(collection, jsonObject);
			Console.WriteLine(jsonObject);
			Console.ReadKey();
		}
	}
}



