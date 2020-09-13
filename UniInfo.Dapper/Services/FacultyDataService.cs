using System;
using System.Collections.Generic;
using System.Text;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services;

namespace UniInfo.Dapper.Services
{
	public class FacultyDataService : GenericDataService<Faculty>, IFacultyDataService
	{
		public FacultyDataService(ApplicationDbConnectionFactory factory) : base(factory)
		{
		}

	}
}
