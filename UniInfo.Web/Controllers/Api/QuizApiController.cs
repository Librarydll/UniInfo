using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Services;

namespace UniInfo.Web.Controllers.Api
{
	[Route("/api/quiz")]
	public class QuizApiController: Controller
	{
		private readonly IQuizDataService _quizDataService;

		public QuizApiController(IQuizDataService quizDataService)
		{
			_quizDataService = quizDataService;
		}


		[HttpGet]
		public async Task<IActionResult> GetQuiz(int firstSubject,int secondSubject,int language)
		{
			var data = await _quizDataService.GetQuizzesBySubjects(firstSubject,secondSubject,language);

			return Ok(data);
		}
	}
}
