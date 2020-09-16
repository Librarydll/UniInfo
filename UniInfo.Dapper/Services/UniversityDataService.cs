using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Models.DTO;
using UniInfo.Domain.Services;

namespace UniInfo.Dapper.Services
{
	public class UniversityDataService :GenericDataService<University>,IUniversityDataService
	{
		public UniversityDataService(ApplicationDbConnectionFactory factory) : base(factory)
		{
		}

		public IEnumerable<University> GetFilteredUniversities(Subject subject, string lang)
		{
			throw new NotImplementedException();
		}

		public Task<IEnumerable<string>> GetLocationsByLanguage(string lang)
		{
			throw new NotImplementedException();
		}

		public async Task<IEnumerable<UniversityDto>> GetUniversities(string city = "", int code = 0)
		{
			using (var connection =_factory.CreateConnection())
			{
				
				string query = "SELECT  u.id,u.NameRu,u.NameUz,u.Location,u.Rating,u.IsNational FROM Universities as u ";

				if (!string.IsNullOrWhiteSpace(city))
				{
					query += $"Where u.nameru like(%{city}% or u.nameuz like %{city}%) ";
				}

				if (code != 0)
				{
					if (query.Contains("Where"))
						query += $"and location={code}";
					else
						query = $"Where u.location={code}";
				}

				var result = await connection.QueryAsync<UniversityDto>(query);
				return result;
			}
		}

		public async Task<University> GetUniversity(int id)
		{
			var lookup = new Dictionary<int, University>();
			var lookup2 = new Dictionary<int, Faculty>();
			using (var connection =_factory.CreateConnection())
			{
				string sql = @"Select *from Universities as u 
							left join faculties as f
							on u.id = f.universityid
							left join subjects as s
							on s.facultyid = f.id
							where u.id = @id ";
				var result = await connection.QueryAsync<University,Faculty,Subject,University>(sql,
					(uni, fac, sub) =>
					{
						if (!lookup.TryGetValue(uni.Id, out University university))
						{
							lookup.Add(uni.Id, university = uni);
						}
						if (!lookup2.TryGetValue(fac.Id, out Faculty faculty))
						{
							lookup2.Add(fac.Id, faculty = fac);
							university.Faculties ??= new List<Faculty>();
							university.Faculties.Add(faculty);
						}
						faculty.Subject=sub;
						return university;
					},param:new {id}
					);
				return result.FirstOrDefault();
			}
		}
	}
}
