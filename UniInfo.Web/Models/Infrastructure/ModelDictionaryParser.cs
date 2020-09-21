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
			[1]= new ModelDictionary { RuVersion = "Узбекский", UzVersion = "O`zbekcha", Code=1 },
			[2]= new ModelDictionary { RuVersion = "Русский", UzVersion = "Ruscha", Code = 2 },
			[3]= new ModelDictionary { RuVersion = "Каракалпакский", UzVersion = "Qoraqalpoqcha", Code = 3 },
			[4]= new ModelDictionary { RuVersion = "Таджикский", UzVersion = "Tojikcha", Code = 4 },
			[5]= new ModelDictionary { RuVersion = "Казакский", UzVersion = "Qozoqcha", Code = 5 },
			[6]= new ModelDictionary { RuVersion = "Туркменский", UzVersion = "Turkmancha", Code = 6 },
			[7]= new ModelDictionary { RuVersion = "Киргизкий", UzVersion = "Qirgizcha", Code = 7 },
			[8]= new ModelDictionary { RuVersion = "Английский", UzVersion = "Ingliz", Code = 8 },

		};
		private static Dictionary<int, ModelDictionary> eduDict = new Dictionary<int, ModelDictionary>
		{
			[1] = new ModelDictionary { RuVersion = "Дневной", UzVersion = "Kunduzgi", Code = 1 },
			[2] = new ModelDictionary { RuVersion = "Заочно", UzVersion = "Sirtqi", Code = 2 },
			[3] = new ModelDictionary { RuVersion = "Вечерний", UzVersion = "Kechgi", Code = 3 },
		
		};
		private static Dictionary<int, ModelDictionary> subjectDict = new Dictionary<int, ModelDictionary>
		{
			[1] = new ModelDictionary { RuVersion = "Английский язык", UzVersion = "Chet tili", Code = 1 },
			[2] = new ModelDictionary { RuVersion = "Биология", UzVersion = "Biologiya", Code = 2 },
			[3] = new ModelDictionary { RuVersion = "География", UzVersion = "Geografiya", Code = 3 },
			[4] = new ModelDictionary { RuVersion = "История", UzVersion = "Tarix", Code = 4 },
			[5] = new ModelDictionary { RuVersion = "Информатика", UzVersion = "Informatika", Code = 5 },
			[6] = new ModelDictionary { RuVersion = "Казакский язык", UzVersion = "Qozoq tili va adabiyoti", Code =6 },
			[7] = new ModelDictionary { RuVersion = "Каракалпакский язык", UzVersion = "Qoraqolpoq tili va adabiyoti", Code = 7 },
			[8] = new ModelDictionary { RuVersion = "Киргизкий язык", UzVersion = "Qirg`iz tili va adabiyoti", Code = 8 },
			[9] = new ModelDictionary { RuVersion = "Математика", UzVersion = "Matematika", Code = 9 },
			[10] = new ModelDictionary { RuVersion = "Немецкий язык", UzVersion = "Nemis tili", Code = 10 },
			[11] = new ModelDictionary { RuVersion = "Русский язык и литература", UzVersion = "Rus tili va adabiyoti", Code = 11 },
			[12] = new ModelDictionary { RuVersion = "Таджиский язык", UzVersion = "Tojik tili", Code = 12 },
			[13] = new ModelDictionary { RuVersion = "Творческий (профессиональный)", UzVersion = "Ijodiy (kasbiy)", Code = 13},
			[14] = new ModelDictionary { RuVersion = "Туркманский язык", UzVersion = "Turkman tili", Code = 14 },
			[15] = new ModelDictionary { RuVersion = "Узбекский язык и литература", UzVersion = "Ona tili va adabiyoti", Code = 15 },
			[16] = new ModelDictionary { RuVersion = "Физика", UzVersion = "Fizika", Code = 16 },
			[17] = new ModelDictionary { RuVersion = "Французкий язык", UzVersion = "Fransuz tili", Code = 17 },
			[18] = new ModelDictionary { RuVersion = "Химия", UzVersion = "Kimyo", Code = 18 },
			[19] = new ModelDictionary { RuVersion = "Логика", UzVersion = "Mantiq", Code = 19 },		
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
