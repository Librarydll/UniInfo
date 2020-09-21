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

	
		
		
	}
}
