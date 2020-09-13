using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Services;
using UniInfo.Web.Models.Infrastructure;

namespace UniInfo.Web.Controllers.Api
{
	[Route("/api/university")]
	[ApiController]
	public class UniversityApiController:Controller
	{
		private readonly ISubjectDataService _subjectDataService;

		public UniversityApiController(ISubjectDataService subjectDataService)
		{
			_subjectDataService = subjectDataService;
		}


		[HttpGet]
		public async Task<IActionResult> GetSubjects()
		{
			var data = await _subjectDataService.GetDistinctedSubjectsAsync();
			var d = data.GetModelSubjectNames();
			return Ok(data);
		}

	}
}
