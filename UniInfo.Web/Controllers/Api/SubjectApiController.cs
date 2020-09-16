using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Services;
using UniInfo.Web.Models.Infrastructure;

namespace UniInfo.Web.Controllers.Api
{
	[Route("/api/subject")]
	[ApiController]
	public class SubjectApiController:Controller
	{
		private ISubjectDataService _subjectDataService;

		public SubjectApiController(ISubjectDataService subjectDataService)
		{
			_subjectDataService = subjectDataService;
		}


		[HttpGet]
		public async Task<IActionResult> GetSubjects()
		{
			var data = await _subjectDataService.GetDistinctedSubjectsAsync();
			var result = data.GetModelSubjectNames();
			return Ok(result);
		}

	}
}
