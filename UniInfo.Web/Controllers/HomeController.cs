using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
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
		private readonly IUniversityDataService universityDataService;

		public HomeController(ILogger<HomeController> logger, IUniversityDataService universityDataService)
		{
			this.universityDataService = universityDataService;

			_logger = logger;
		}

		public async Task<IActionResult> Index()
		{
			var s = await universityDataService.FilterFacultiesBySubjects(9, 16, 1);
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


		[HttpPost]
		public IActionResult SetLanguage(string culture, string returnUrl)
		{
			string lang;
			if (string.IsNullOrWhiteSpace(culture))
				lang = "uz";
			else
			{
				lang = culture.Contains("Ru") ? "ru" : "uz";
			}


			Response.Cookies.Append(
			CookieRequestCultureProvider.DefaultCookieName,
			CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(lang)),
			new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) });
			return LocalRedirect(returnUrl);
		}

	}
}
