using Dapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Models.Common;
using UniInfo.Domain.Services;

namespace UniInfo.Dapper.Services
{
	public class SubjectDataService : GenericDataService<Subject>, ISubjectDataService
	{
		readonly string distincScript =
		$"SELECT DISTINCT s.FirstSubject,s.SecondSubject From Subjects as s";
		public SubjectDataService(ApplicationDbConnectionFactory factory) : base(factory)
		{
		}

	
		public async Task<IEnumerable<ISubject<int>>> GetDistinctedSubjectsAsync()
		{
			using (var connection = _factory.CreateConnection())
			{
				IEnumerable<ISubject<int>> subjects = await connection.QueryAsync<Subject>(distincScript);
				return subjects;
			}
		}
	}
}
