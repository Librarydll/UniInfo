using HtmlAgilityPack;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;
using Newtonsoft.Json;
using NPOI.XWPF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using UniInfo.CollectionData.Models;
using UniInfo.Domain.Models;

namespace UniInfo.CollectionData.Parser
{
	public class FileParser
	{
		public static IEnumerable<Rootobject> ParseToJson(string filepath)
		{
			using (var reader = new StreamReader(filepath))
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
			var nodes = uniSelect.ChildNodes.Skip(2).Where((n, index) => index % 2 != 0);
			foreach (var node in nodes)
			{
				var optionValue = node.GetAttributeValue("value", "0");

				collection.Add(new Rootobject
				{
					code = optionValue,
					unname = node.InnerText.Trim()
				});
			}
			return collection;
		}

		public static IEnumerable<Rootobject> UnionObjects(IEnumerable<Rootobject> listWithName, IEnumerable<Rootobject> listWithoutName)
		{
			var result = listWithoutName.Select(x =>
			{
				var obj = listWithName.Where(y => y.code == x.code).First();
				x.unname = obj.unname;
				return x;
			});

			return result;
		}

		public static void ParseWord(string filepath)
		{
			//Dictionary<int, University> dict = new Dictionary<int, University>();
			//using (FileStream file = new FileStream(filepath, FileMode.Open, FileAccess.Read))
			//{
			//	int n = 0;
			//	int i = 1;
			//	var document = new XWPFDocument(file);
			//	foreach (var table in document.Tables)
			//	{
			//		foreach (var row in table.Rows)
			//		{
			//			var cell = row.GetTableCells();
			//			if (cell.Count < 8) continue;

			//			var code = cell[0].GetText();
			//			University u = null;
			//			long.TryParse(code, out long v);
			//			var name = cell[1].GetText();
			//			if (v == i && !string.IsNullOrWhiteSpace(name))
			//			{				
			//				i++;
			//			}
			//			if (!dict.TryGetValue((int)v, out u))
			//			{
			//				u = new University();
			//				u.Name = name;
			//				u.Faculties = new List<Faculty>();
			//				dict.Add((int)v, u);
			//			}

			//			if (v < 5000) continue;

			//			var facname = cell[1].GetText();

			//			var totalg = GetNum(cell[3].GetText());//total grand
			//			var totalk = GetNum(cell[6].GetText());//total contract
			//			var uzg = GetNum(cell[4].GetText());//uz grand
			//			var rug = Calculate(totalg, uzg);//ru grand			
			//			var uzk = GetNum(cell[7].GetText());//uz contract
			//			var ruk = Calculate(totalk, uzk);//ru contract
			//			u.Faculties.Add(new Faculty
			//			{
			//				//FacultyName = facname,
			//				Grant = rug,
			//				Contract = ruk,
			//				Language=2
			//			});
			//			u.Faculties.Add(new Faculty
			//			{

			//			});
			//			//Console.WriteLine($"{code} {uzg} {rug} {uzk} {ruk}");
			//			//Console.WriteLine(uzg);
			//		}
			//	}
			//	Console.WriteLine(n);
			//}
		}

		public static void ParsePdf(string filepath)
		{
			var pages = new List<String>();
			using (var pdfReader =new PdfReader(filepath))
			{
				for (int page = 1; page <= pdfReader.NumberOfPages; page++)
				{



					ITextExtractionStrategy strategy = new SimpleTextExtractionStrategy();
					string currentText = PdfTextExtractor.GetTextFromPage(pdfReader, page, strategy).TrimStart().TrimEnd();
					Console.WriteLine(currentText);
					currentText = Encoding.UTF8.GetString(ASCIIEncoding.Convert(Encoding.Default, Encoding.UTF8, Encoding.Default.GetBytes(currentText)));
					//Console.WriteLine(currentText);

				}

				//StringBuilder sb = new StringBuilder();
				//for (int i = 1; i <= pdfReader.NumberOfPages; i++)
				//{
				//	Rectangle mediabox = pdfReader.GetPageSize(i);
				//	mediabox = new Rectangle(700, 700);
				//	RenderFilter[] filter = { new RegionTextRenderFilter(mediabox) };
				//	ITextExtractionStrategy strategy;

				//	strategy = new FilteredTextRenderListener(new LocationTextExtractionStrategy(), filter);
				//	var sad = PdfTextExtractor.GetTextFromPage(pdfReader, i, strategy);
				//	sb.AppendLine(PdfTextExtractor.GetTextFromPage(pdfReader, i, strategy));
				//}
			}
		}
		

		public static int GetNum(string str)
		{
			int.TryParse(str, out int n);
			return n;
		}

		public static int Calculate(int total,int n)
		{
			return total - n;
		}
	}
}
