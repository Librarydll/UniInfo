using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Domain.Models;
using UniInfo.Domain.Models.DTO;
using UniInfo.Domain.Services.Common;

namespace UniInfo.Domain.Services
{
	public interface IFacultyDataService: IDataServiceAsync<Faculty>
	{
		Task<IEnumerable<FacultyDto>> FilterFacultiesBySubjects(int code1, int code2, int code3);
	}
}
