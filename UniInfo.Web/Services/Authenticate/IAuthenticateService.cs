using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UniInfo.Web.Models.ViewModels;

namespace UniInfo.Web.Services.Authenticate
{
    public interface IAuthenticateService
    {
        Task<bool> Authenticate(LoginViewModel model);

        Task<bool> Register(LoginViewModel model);
    }
}
