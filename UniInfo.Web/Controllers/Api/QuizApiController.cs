using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services;

namespace UniInfo.Web.Controllers.Api
{
	[Route("/api/quiz")]
	[ApiController]
	public class QuizApiController: Controller
	{
		private readonly IQuizDataService _quizDataService;
		private readonly ILogger<HomeController> _logger;

		public QuizApiController(IQuizDataService quizDataService, ILogger<HomeController> logger)
		{
			_quizDataService = quizDataService;
			_logger = logger;
		}


		[HttpGet]	

		public async Task<IActionResult> GetQuiz(int firstSubject,int secondSubject,int language)
		{
		//	_logger.LogInformation(language.ToString());
			var data = await _quizDataService.GetQuizzesBySubjects(firstSubject,secondSubject,language);

			return Ok(data);
		}

		[HttpPost, Authorize]
		public async Task<IActionResult> CreateQuiz([FromBody]Quiz quiz)
        {
			await _quizDataService.CreateAsync(quiz);
			if (quiz.Id != 0)
				return Ok();

			return BadRequest("Cannot create quiz");
        }
	}
}
