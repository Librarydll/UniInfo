using Dapper;
using System;
using System.Collections.Generic;
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

		public Task<University> GetUniversity(int id)
		{
			throw new NotImplementedException();
		}
	}
}
