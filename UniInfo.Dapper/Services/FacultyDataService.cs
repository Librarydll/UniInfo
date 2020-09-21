using Dapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models;
using UniInfo.Domain.Models.DTO;
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
