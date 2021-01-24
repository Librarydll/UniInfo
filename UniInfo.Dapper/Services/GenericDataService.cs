using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Dapper.Context;
using UniInfo.Domain.Models.Common;
using UniInfo.Domain.Services.Common;

namespace UniInfo.Dapper.Services
{
	public class GenericDataService<T> : IDataServiceAsync<T> where T: BaseEntity
	{
		protected ApplicationDbConnectionFactory _factory;
		public GenericDataService(ApplicationDbConnectionFactory factory)
		{
			_factory = factory;
		}
		public async Task CreateAsync(T entity)
		{
			using (var connection=_factory.CreateConnection())
			{
				entity.Id = await connection.InsertAsync(entity);
			}
		}

		public async Task CreateRangeAsync(IEnumerable<T> entities)
		{
			using (var connection = _factory.CreateConnection())
			{
				foreach (var entity in entities)
				{
					entity.Id = await connection.InsertAsync(entity);
				}
			}
		}

		public async Task<bool> DeleteAsync(T entity)
		{
			using (var connection = _factory.CreateConnection())
			{
				var deleted = await connection.DeleteAsync(entity);
				return deleted;
			}
		}

		public async Task<IEnumerable<T>> GetAllAsync()
		{
			using (var connection = _factory.CreateConnection())
			{
				var entities = await connection.GetAllAsync<T>();
				return entities;
			}
		}

		public async Task<bool> UpdateAsync(T entity)
		{
			using (var connection = _factory.CreateConnection())
			{
				var updated = await connection.UpdateAsync(entity);
				return updated;
			}
		}

        public async Task<int> UpdateRangeAsync(IEnumerable<T> entities)
        {
			using (var connection = _factory.CreateConnection())
			{
				int rowAffectedCount = 0;
                foreach (var entity in entities)
                {
					var updated = await connection.UpdateAsync(entity);
					if (updated) rowAffectedCount++;
				}
				return rowAffectedCount;
			}
		}
    }
}
