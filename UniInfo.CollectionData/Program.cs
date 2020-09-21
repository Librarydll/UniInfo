using System;
using System.IO;
using System.Linq;
using System.Text;
using UniInfo.CollectionData.Parser;
using UniInfo.Core.Json;

namespace UniInfo.CollectionData
{
	class Program
	{
		static void Main(string[] args)
		{

			File.WriteAllText("languageJson.json", ModelDictionaryJsonParser.GetLanguageJson());
			File.WriteAllText("locationJson.json", ModelDictionaryJsonParser.GetLocationJson());
			File.WriteAllText("subjectJson.json", ModelDictionaryJsonParser.GetSubjectsJson());
			File.WriteAllText("educatuinTypeJson.json", ModelDictionaryJsonParser.GetEducationTypeJson());

			//var jsonObject = FileParser.ParseToJson("d2019.json");
			//var collection = FileParser.ParseHtml("uni.html");
			//var result = FileParser.UnionObjects(collection, jsonObject);
			//FileParser.ParseWord("kvota-kunduzgi.docx");
			//FileParser.ParsePdf("kvota-kunduzgi.pdf");
		//	Console.WriteLine(jsonObject);
			Console.ReadKey();
		}
	}
}



