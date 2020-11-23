using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services.Common;

namespace UniInfo.Domain.Services
{
	public interface IQuizDataService: IDataServiceAsync<Quiz>
	{
		Task<IEnumerable<Quiz>> GetQuizzesBySubjects(int firstSubject, int secondSubject,int lang);
	}
}
