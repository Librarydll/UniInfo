using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using UniInfo.Domain.Models;
using UniInfo.Domain.Services;
using UniInfo.Web.Models.ViewModels;
using UniInfo.Web.Services.Authenticate;

namespace UniInfo.Web.Controllers.Admin
{

    public class AdminController : Controller
    {
        private readonly IAuthenticateService _authenticateService;

        public AdminController(IAuthenticateService authenticateService)
        {
            _authenticateService = authenticateService;
        }


        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("/admin/login")]
        public async Task<IActionResult> Login([FromBody] LoginViewModel creds)
        {
            var result = await _authenticateService.Authenticate(creds);
            if (result)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var claims = new List<Claim>
                {
                    new Claim("user", creds.Login),
                    new Claim("role", "Member")
                };

                var tokeOptions = new JwtSecurityToken(
                      claims: claims,
                      expires: DateTime.Now.AddMinutes(5),
                      signingCredentials: signinCredentials
                    );
                await HttpContext.SignInAsync(new ClaimsPrincipal(new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme, "user", "role")));

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);

                return Ok(new { Token = tokenString });
            }

            return BadRequest("username or password is invalid");
        }
        [HttpPost("/admin/logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            return Ok();
        }

        [HttpPost("api/admin/register")]
        public async Task<IActionResult> Register([FromBody] LoginViewModel creds)
        {
            //  var result = await _authenticateService.Register(creds);
            //   if (result)
            //     return Ok("true");

            return BadRequest("something goes wrong");
        }

    }
}
