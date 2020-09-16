using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UniInfo.Web.Controllers
{
	public class UniversityListController:Controller
	{
		public UniversityListController()
		{
		}

		public IActionResult Index()
		{
			return View();
		}

		[HttpGet("[controller]/university/{id?}")]
		public IActionResult University(int id)
		{
			return View();
		}

	}
}
