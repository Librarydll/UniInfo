using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using UniInfo.Domain.Services;
using UniInfo.Web.Models;
using UniInfo.Web.Models.Infrastructure;

namespace UniInfo.Web.Controllers
{
	public class HomeController : Controller
	{
		private readonly ILogger<HomeController> _logger;
		private readonly ISubjectDataService _subjectDataService;

		public HomeController(ILogger<HomeController> logger, ISubjectDataService subjectDataService)
		{
			_subjectDataService = subjectDataService;

			_logger = logger;
		}

		public async Task<IActionResult> Index()
		{
			//var data = await _subjectDataService.GetDistinctedSubjectsAsync();
			//var d = data.GetModelSubjectNames();
			//return Ok(data);

			return View();
		}

		public IActionResult Privacy()
		{
			return View();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}
