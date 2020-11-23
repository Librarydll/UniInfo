using Dapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services;

namespace UniInfo.Dapper.Services
{
	public class QuizDataService : GenericDataService<Quiz>,IQuizDataService
	{
		public QuizDataService(ApplicationDbConnectionFactory factory) : base(factory)
		{
		}

		public async Task<IEnumerable<Quiz>> GetQuizzesBySubjects(int firstSubject, int secondSubject, int lang)
		{

			string query = @"((SELECT *FROM Quizzes
							where subject = @firstSubject  and language = @lang
							ORDER BY RAND() LIMIT 30)
							UNION
							(SELECT * FROM Quizzes
							where subject = @secondSubject  and language = @lang
							ORDER BY RAND() LIMIT 30))";

			using (var connection = _factory.CreateConnection())
			{
				var quizzes = await connection.QueryAsync<Quiz>(query, new { firstSubject,secondSubject,lang } );
				return quizzes;
			}
		}
	}
}
