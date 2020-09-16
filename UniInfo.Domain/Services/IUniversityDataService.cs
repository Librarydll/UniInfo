using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Domain.Models;
using UniInfo.Domain.Models.DTO;
using UniInfo.Domain.Services.Common;

namespace UniInfo.Domain.Services
{
	public interface IUniversityDataService: IDataServiceAsync<University>
	{
		Task<IEnumerable<string>> GetLocationsByLanguage(string lang);

		IEnumerable<University> GetFilteredUniversities(Subject subject, string lang);

		Task<University> GetUniversity(int id);

		Task<IEnumerable<UniversityDto>> GetUniversities(string city = "", int code=0);
	}
}
