using Dapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Models.Common;
using UniInfo.Domain.Services;
using System.Linq;
namespace UniInfo.Dapper.Services
{
	public class SubjectDataService : GenericDataService<Subject>, ISubjectDataService
	{
		readonly string distincScript =
		$"SELECT DISTINCT s.FirstSubject,s.SecondSubject From subjects as s";
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

		public async Task<IEnumerable<ISubject<int>>> GetSubjectsForQuiz()
		{
			string query = @"SELECT DISTINCT s.FirstSubject,s.SecondSubject From subjects as s
							Where s.firstSubject in (SELECT distinct q.Subject From quizzes as q) 
							and s.secondSubject in (SELECT distinct q.Subject From quizzes as q)";

			using (var connection = _factory.CreateConnection())
			{
				IEnumerable<ISubject<int>> subjects = await connection.QueryAsync<Subject>(query);

				return subjects;
			}
		}
	}
}
