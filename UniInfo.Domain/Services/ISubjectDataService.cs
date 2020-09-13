using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services.Common;

namespace UniInfo.Domain.Services
{
	public interface ISubjectDataService: IDataServiceAsync<Subject>
	{
		Task<IEnumerable<Subject>> GetDistinctedSubjectsAsync();
	}
}
