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
		private readonly IUniversityDataService _universityDataService;

		public UniversityApiController(IUniversityDataService universityDataService)
		{
			_universityDataService = universityDataService;
		}


		[HttpGet]
		public async Task<IActionResult> GetUniversities(string city="",int code=0)
		{
			var data = await _universityDataService.GetUniversities(city, code);

			return Ok(data);
		}
		[HttpGet("{id}")]
		public async Task<IActionResult> GetUniversities(int? id)
		{
			if (id == null)
			{
				return BadRequest();
			}
			var university = await _universityDataService.GetUniversity((int)id);
			return Ok(university);
		}
	}
}
