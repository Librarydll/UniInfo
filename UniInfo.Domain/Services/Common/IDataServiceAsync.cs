using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace UniInfo.Domain.Services.Common
{
	public	interface IDataServiceAsync<TEntity>
	{
		Task<IEnumerable<TEntity>> GetAllAsync();
		Task CreateAsync(TEntity entity);
		Task<bool> DeleteAsync(TEntity entity);
		Task<bool> UpdateAsync(TEntity entity);

		Task<int> UpdateRangeAsync(IEnumerable<TEntity> entities);
		Task CreateRangeAsync(IEnumerable<TEntity> entities);
	}
}
