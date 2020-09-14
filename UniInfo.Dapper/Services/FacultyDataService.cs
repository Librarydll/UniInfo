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
		readonly string query = @"select f.facultyname,f.grant,f.contract,f.grantpass,f.contractpass,f.educationtype,f.language,f.period,f.asfirst,f.assecond,f.asthird,f.universityid,u.name as universitynameuz ,u.nameru as universitynameru
								from faculties as f
								left join subjects as s
								on s.facultyid=f.id
								left join universities as u
								on f.universityid =u.id
								where s.firstsubject=@code1 and s.secondsubject =@code2  and s.thirdsubject=@code3
								order by u.name,u.nameru";

		public FacultyDataService(ApplicationDbConnectionFactory factory) : base(factory)
		{
		}

		public async Task<IEnumerable<FacultyDto>> FilterFacultiesBySubjects(int code1, int code2, int code3)
		{
			using (var connection =_factory.CreateConnection())
			{
				var result = await connection.QueryAsync<FacultyDto>(query,
				new
				{
					code1,
					code2,
					code3
				}
				);
				return result;
			}
		}
	}
}
