using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Models.Common;
using UniInfo.Domain.Models.DTO;

namespace UniInfo.Web.Models.Infrastructure
{
	public static class ModelDictionaryParser
	{
	
		private static Dictionary<int, ModelDictionary> langDict = new Dictionary<int, ModelDictionary>
		{
			[1]= new ModelDictionary { RuVersion = "Узбекский", UzVersion = "as",Code=1 },
			[2]= new ModelDictionary { RuVersion = "Русский", UzVersion = "as", Code = 2 },
			[3]= new ModelDictionary { RuVersion = "Каракалпакский", UzVersion = "as", Code = 3 },
			[4]= new ModelDictionary { RuVersion = "Таджикский", UzVersion = "as", Code = 4 },
			[5]= new ModelDictionary { RuVersion = "Казакский", UzVersion = "as", Code = 5 },
			[6]= new ModelDictionary { RuVersion = "Туркменский", UzVersion = "as", Code = 6 },
			[7]= new ModelDictionary { RuVersion = "Киргизкий", UzVersion = "as", Code = 7 },
			[8]= new ModelDictionary { RuVersion = "Английский", UzVersion = "as", Code = 8 },

		};
		private static Dictionary<int, ModelDictionary> eduDict = new Dictionary<int, ModelDictionary>
		{
			[1] = new ModelDictionary { RuVersion = "Дневной", UzVersion = "as", Code = 1 },
			[2] = new ModelDictionary { RuVersion = "Заочно", UzVersion = "as", Code = 2 },
			[3] = new ModelDictionary { RuVersion = "Вечерний", UzVersion = "as", Code = 3 },
		
		};
		private static Dictionary<int, ModelDictionary> subjectDict = new Dictionary<int, ModelDictionary>
		{
			[1] = new ModelDictionary { RuVersion = "Английский язык", UzVersion = "as", Code = 1 },
			[2] = new ModelDictionary { RuVersion = "Биология", UzVersion = "as", Code = 2 },
			[3] = new ModelDictionary { RuVersion = "География", UzVersion = "as", Code = 3 },
			[4] = new ModelDictionary { RuVersion = "История", UzVersion = "as", Code = 4 },
			[5] = new ModelDictionary { RuVersion = "Информатика", UzVersion = "as", Code = 5 },
			[6] = new ModelDictionary { RuVersion = "Казакский язык", UzVersion = "as", Code =6 },
			[7] = new ModelDictionary { RuVersion = "Каракалпакский язык", UzVersion = "as", Code = 7 },
			[8] = new ModelDictionary { RuVersion = "Киргизкий язык", UzVersion = "as", Code = 8 },
			[9] = new ModelDictionary { RuVersion = "Математика", UzVersion = "as", Code = 9 },
			[10] = new ModelDictionary { RuVersion = "Немецкий язык", UzVersion = "as", Code = 10 },
			[11] = new ModelDictionary { RuVersion = "Русский язык и литература", UzVersion = "as", Code = 11 },
			[12] = new ModelDictionary { RuVersion = "Таджиский язык", UzVersion = "as", Code = 12 },
			[13] = new ModelDictionary { RuVersion = "Творческий (профессиональный)", UzVersion = "as", Code = 13},
			[14] = new ModelDictionary { RuVersion = "Туркманский язык", UzVersion = "as", Code = 14 },
			[15] = new ModelDictionary { RuVersion = "Узбекский язык и литература", UzVersion = "as", Code = 15 },
			[16] = new ModelDictionary { RuVersion = "Физика", UzVersion = "as", Code = 16 },
			[17] = new ModelDictionary { RuVersion = "Французкий язык", UzVersion = "as", Code = 17 },
			[18] = new ModelDictionary { RuVersion = "Химия", UzVersion = "as", Code = 18 },
			[19] = new ModelDictionary { RuVersion = "Логика", UzVersion = "as", Code = 19 },		
		};
		public static ModelDictionary GetModelLanguage(int key)
		{
			return langDict.GetValueOrDefault(key);
		}
		public static ModelDictionary GetModelEducationType(int key)
		{
			return eduDict.GetValueOrDefault(key);
		}
		public static ModelDictionary GetModelSubjectName(int key)
		{
			return subjectDict.GetValueOrDefault(key);
		}

		public static IEnumerable<ModelDictionary> GetModelLanguages(IEnumerable<int> keys)
		{
			foreach (var key in keys)
			{
				yield return langDict.GetValueOrDefault(key);
			}
		}
		public static IEnumerable<ModelDictionary> GetModelEducationTypes(IEnumerable<int> keys)
		{
			foreach (var key in keys)
			{
				yield return eduDict.GetValueOrDefault(key);
			}
		}
		public static IEnumerable<ModelDictionary> GetModelSubjectNames(IEnumerable<int> keys)
		{
			foreach (var key in keys)
			{
				yield return subjectDict.GetValueOrDefault(key);
			}
		}


		public static IEnumerable<SubjectModel> GetModelSubjectNames(this IEnumerable<ISubject<int>> subjectDtos)
		{
			ICollection<SubjectModel> collection = new List<SubjectModel>();
			foreach (var subject in subjectDtos)
			{
				collection.Add(new SubjectModel
				{
					FirstSubject = subjectDict.GetValueOrDefault(subject.FirstSubject),
					SecondSubject = subjectDict.GetValueOrDefault(subject.SecondSubject),
					ThirdSubject = subjectDict.GetValueOrDefault(subject.ThirdSubject),

				});
			}
			return collection;
		}
	}
}
