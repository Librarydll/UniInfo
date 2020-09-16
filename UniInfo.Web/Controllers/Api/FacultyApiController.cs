using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Domain.Services;

namespace UniInfo.Web.Controllers.Api
{
	[Route("/api/faculty")]
	[ApiController]
	public class FacultyApiController:Controller
	{

		private readonly IFacultyDataService _facultyDataService;
		private readonly ILogger<FacultyApiController> _logger;

		public FacultyApiController(IFacultyDataService facultyDataService, ILogger<FacultyApiController> logger)
		{
			_facultyDataService = facultyDataService;
			_logger = logger;
		}

	
		[HttpGet]
		public async Task<IActionResult> GetFaculties(int code1, int code2, int code3)
		{
			_logger.LogInformation("request");
			if (code1 == 0 || code2 == 0 || code3 == 0)
			{
				return BadRequest();
			}

			var d = await _facultyDataService.FilterFacultiesBySubjects(code1, code2, code3);
			_logger.LogInformation("done");

			return Ok(d);
		}
		
	}
}
