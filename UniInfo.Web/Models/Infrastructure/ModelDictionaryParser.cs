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
			[1]= new ModelDictionary { RuVersion = "Узбекский", UzVersion = "as" },
			[2]= new ModelDictionary { RuVersion = "Русский", UzVersion = "as" },
			[3]= new ModelDictionary { RuVersion = "Каракалпакский", UzVersion = "as" },
			[4]= new ModelDictionary { RuVersion = "Таджикский", UzVersion = "as" },
			[5]= new ModelDictionary { RuVersion = "Казакский", UzVersion = "as" },
			[6]= new ModelDictionary { RuVersion = "Туркменский", UzVersion = "as" },
			[7]= new ModelDictionary { RuVersion = "Киргизкий", UzVersion = "as" },
			[8]= new ModelDictionary { RuVersion = "Английский", UzVersion = "as" },

		};
		private static Dictionary<int, ModelDictionary> eduDict = new Dictionary<int, ModelDictionary>
		{
			[1] = new ModelDictionary { RuVersion = "Дневной", UzVersion = "as" },
			[2] = new ModelDictionary { RuVersion = "Заочно", UzVersion = "as" },
			[3] = new ModelDictionary { RuVersion = "Вечерний", UzVersion = "as" },
		
		};
		private static Dictionary<int, ModelDictionary> subjectDict = new Dictionary<int, ModelDictionary>
		{
			[1] = new ModelDictionary { RuVersion = "Английский язык", UzVersion = "as" },
			[2] = new ModelDictionary { RuVersion = "Биология", UzVersion = "as" },
			[3] = new ModelDictionary { RuVersion = "География", UzVersion = "as" },
			[4] = new ModelDictionary { RuVersion = "История", UzVersion = "as" },
			[5] = new ModelDictionary { RuVersion = "Информатика", UzVersion = "as" },
			[6] = new ModelDictionary { RuVersion = "Казакский язык", UzVersion = "as" },
			[7] = new ModelDictionary { RuVersion = "Каракалпакский язык", UzVersion = "as" },
			[8] = new ModelDictionary { RuVersion = "Киргизкий язык", UzVersion = "as" },
			[9] = new ModelDictionary { RuVersion = "Математика", UzVersion = "as" },
			[10] = new ModelDictionary { RuVersion = "Немецкий язык", UzVersion = "as" },
			[11] = new ModelDictionary { RuVersion = "Русский язык и литература", UzVersion = "as" },
			[12] = new ModelDictionary { RuVersion = "Таджиский язык", UzVersion = "as" },
			[13] = new ModelDictionary { RuVersion = "Творческий (профессиональный)", UzVersion = "as" },
			[14] = new ModelDictionary { RuVersion = "Туркманский язык", UzVersion = "as" },
			[15] = new ModelDictionary { RuVersion = "Узбекский язык и литература", UzVersion = "as" },
			[16] = new ModelDictionary { RuVersion = "Физика", UzVersion = "as" },
			[17] = new ModelDictionary { RuVersion = "Французкий язык", UzVersion = "as" },
			[18] = new ModelDictionary { RuVersion = "Химия", UzVersion = "as" },
			[19] = new ModelDictionary { RuVersion = "Логика", UzVersion = "as" },		
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
