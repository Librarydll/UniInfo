using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services;

namespace UniInfo.Dapper.Services
{
	public class SubjectDataService : GenericDataService<Subject>, ISubjectDataService
	{
		public SubjectDataService(ApplicationDbConnectionFactory factory) : base(factory)
		{
		}

		public Task<IEnumerable<Subject>> GetDistinctedSubjectsAsync()
		{
			throw new NotImplementedException();
		}
	}
}
