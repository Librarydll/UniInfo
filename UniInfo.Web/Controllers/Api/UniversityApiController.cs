using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Models.Common;
using UniInfo.Domain.Models.DTO;
using UniInfo.Domain.Services;
using UniInfo.Web.Models.Infrastructure;

namespace UniInfo.Web.Controllers.Api
{
	[Route("/api/university")]
	[ApiController]
	public class UniversityApiController:Controller
	{
		private readonly ISubjectDataService _subjectDataService;
		private readonly IFacultyDataService _facultyDataService;

		public UniversityApiController(ISubjectDataService subjectDataService,IFacultyDataService facultyDataService)
		{
			_subjectDataService = subjectDataService;
			_facultyDataService = facultyDataService;
		}


		[HttpGet]
		public async Task<IActionResult> GetSubjects()
		{
			var data = await _subjectDataService.GetDistinctedSubjectsAsync();
			var result = data.GetModelSubjectNames();
			return Ok(result);   
		}

		[Route("faculties")]
		[HttpGet]
		public async Task<IActionResult> GetFaculties(int code1, int code2, int code3)
		{
			if (code1 == 0 || code2 == 0 || code3 == 0)
			{
				return BadRequest();
			}

			var d = await _facultyDataService.FilterFacultiesBySubjects(code1,code2,code3);
			return Ok(d);
		}
	}
}
