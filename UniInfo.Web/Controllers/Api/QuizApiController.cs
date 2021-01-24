using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services;
using UniInfo.Web.Services.Shuffle;

namespace UniInfo.Web.Controllers.Api
{
	[Route("/api/quiz")]
	[ApiController]
	public class QuizApiController: Controller
	{
		private readonly IQuizDataService _quizDataService;
        private readonly IShuffleQuizService _shuffleQuizService;

        public QuizApiController(IQuizDataService quizDataService, IShuffleQuizService shuffleQuizService)
		{
			_quizDataService = quizDataService;
            _shuffleQuizService = shuffleQuizService;
        }


		[HttpGet]	

		public async Task<IActionResult> GetQuiz(int firstSubject,int secondSubject,int language)
		{
			var data = await _quizDataService.GetQuizzesBySubjects(firstSubject,secondSubject,language);

			return Ok(data);
		}

		[HttpPost]
		[Authorize]
		public async Task<IActionResult> CreateQuiz([FromBody]Quiz quiz)
        {	
			await _quizDataService.CreateAsync(quiz);
			if (quiz.Id != 0)
				return Ok(true);

			return BadRequest("Cannot create quiz");
        }

		[HttpGet("/api/quiz/ShuffleQuizes")]
		[Authorize]
		public async Task<IActionResult> ShuffleQuizes()
        {
			var quizes = await _quizDataService.GetAllAsync();
			var shuffledQuizes = _shuffleQuizService.ShuffleAnswersInQuizes(quizes);
			var rowAffectedCount = await _quizDataService.UpdateRangeAsync(shuffledQuizes);
			return Ok(new { rowAffectedCount });
		}
	}
}
