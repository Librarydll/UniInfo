﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UniInfo.Web.Controllers
{
	public class QuizController:Controller
	{
		public QuizController()
		{

		}

		public IActionResult Index()
		{
			return View();
		}
	}
}
