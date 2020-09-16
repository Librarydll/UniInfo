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
		readonly string query = @"select f.facultynameru,f.facultynameuz,f.code,f.grant,f.contract,f.grantpass,f.contractpass,f.educationtype,f.language,f.period,f.asfirst,f.assecond,f.asthird,f.universityid,u.nameuz as universitynameuz ,u.nameru as universitynameru,u.id as universityid
								from Faculties as f
								left join Subjects as s
								on s.facultyid=f.id
								left join Universities as u
								on f.universityid =u.id
								where s.firstsubject=@code1 and s.secondsubject =@code2  and s.thirdsubject=@code3
								order by u.nameuz,u.nameru";

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
