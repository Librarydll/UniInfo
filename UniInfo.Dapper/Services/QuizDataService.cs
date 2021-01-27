using Dapper;
using Dapper.Contrib.Extensions;
using System.Collections.Generic;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services;

namespace UniInfo.Dapper.Services
{
	public class QuizDataService : GenericDataService<Quiz>, IQuizDataService
	{
		public QuizDataService(ApplicationDbConnectionFactory factory) : base(factory)
		{
		}

		public async Task<IEnumerable<Quiz>> GetQuizzesBySubjects(int firstSubject, int secondSubject, int lang)
		{

			string query = @"((SELECT *FROM Quizzes where subject = @firstSubject and (language = @lang or bothlanguages = 1) 
							 ORDER BY RAND() LIMIT 30)) 
							 UNION 
							((SELECT * FROM Quizzes where subject = @secondSubject and (language = @lang or bothlanguages = 1) 
                            ORDER BY RAND() LIMIT 30))";

			using (var connection = _factory.CreateConnection())
			{
				var quizzes = await connection.QueryAsync<Quiz>(query, new { firstSubject, secondSubject, lang });
				return quizzes;
			}
		}

		public async override Task CreateAsync(Quiz entity)
		{
			using (var connection = _factory.CreateConnection())
			{
				string query = "Select Max(QuestionUniqueId) from quizzes";
				var maxUniqueId = await connection.QueryFirstAsync<int>(query);
				entity.QuestionUniqueId = maxUniqueId + 1;
				entity.Id = await connection.InsertAsync(entity);
			}
		}
	}
}
