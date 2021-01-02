using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services.Common;

namespace UniInfo.Domain.Services
{
    public interface IUserDataService: IDataServiceAsync<User>
    {
        Task<User> Login(User user);
    }
}
