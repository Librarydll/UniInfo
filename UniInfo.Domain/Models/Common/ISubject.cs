using System;
using System.Collections.Generic;
using System.Text;

namespace UniInfo.Domain.Models.Common
{
	public interface ISubject<T>
	{
		public T FirstSubject { get; set; }
		public T SecondSubject { get; set; }
		public T ThirdSubject { get; set; }
	}
}
