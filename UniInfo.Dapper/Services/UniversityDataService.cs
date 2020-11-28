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

		public async Task<IEnumerable<UniversityDto>> FilterFacultiesBySubjects(int code1, int code2)
		{
			string query = $@"select u.id ,u.nameuz,u.location,u.nameru,f.universityid,f.facultynameru,f.facultynameuz,f.code,f.id,f.grant,f.contract,f.grantpass,f.contractpass,f.educationtype,f.language,f.period,f.TotalApply
								from Universities as u
								left join Faculties as f
								on u.id=f.universityid
								left join Subjects as s
								on s.facultyid =f.id
								where (s.firstsubject={code1} and s.secondsubject ={code2}) or (s.firstsubject={code2} and s.secondsubject ={code1})
								order by u.nameuz,u.nameru";

			return await GenerateUniversitiesWithFacutlies(query);
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
		///TODO : CHANGE QUERYASYNC TO QueryFirstAsync
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

						if (fac == null) 
							return university;

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
				return lookup.Values.FirstOrDefault();
			}
		}

		public async Task<IEnumerable<UniversityDto>> GetUniversitiesByPassValue(double passValue)
		{
			string query = $@"select u.id ,u.nameuz,u.location,u.nameru,f.universityid,f.facultynameru,f.facultynameuz,f.code,f.id,f.grant,f.contract,f.grantpass,f.contractpass,f.educationtype,f.language,f.period,f.TotalApply
								from Universities as u
								left join Faculties as f
								on u.id=f.universityid
								left join Subjects as s
								on s.facultyid =f.id
								where (f.grantpass<={passValue.ToString().Replace(",",".")} and f.grant!=0 and f.grantpass!=0) || (f.contractpass<={passValue.ToString().Replace(",", ".")} and f.contract!=0 and f.contractpass!=0) 
								order by u.nameuz,u.nameru";

			return await GenerateUniversitiesWithFacutlies(query);
		}

		private async Task<IEnumerable<UniversityDto>> GenerateUniversitiesWithFacutlies(string query)
		{
			using (var connection = _factory.CreateConnection())
			{
				var lookup = new Dictionary<int, UniversityDto>();
				var result = await connection.QueryAsync<UniversityDto, Faculty, UniversityDto>(query,
					(university, faculty) =>
					{

						if (!lookup.TryGetValue(university.Id, out UniversityDto u))
						{
							u = university;
							u.Faculties = new List<Faculty>();
							lookup.Add(university.Id, university);
						}

						u.Faculties.Add(faculty);

						return u;
					}
				);
				return lookup.Values.ToList();
			}
		}
	}
}
