using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
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

		public Task<University> GetUniversity(int id)
		{
			throw new NotImplementedException();
		}
	}
}
