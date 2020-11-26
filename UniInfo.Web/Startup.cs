using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using System;
using System.Globalization;
using UniInfo.Dapper.Context;
using UniInfo.Dapper.Services;
using UniInfo.Domain.Services;

namespace UniInfo.Web
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;

		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddControllersWithViews();


			services.AddTransient<IUniversityDataService, UniversityDataService>();
			services.AddTransient<IFacultyDataService, FacultyDataService>();
			services.AddTransient<ISubjectDataService, SubjectDataService>();
			services.AddTransient<IQuizDataService, QuizDataService>();
			services.AddSingleton(service =>
			{
				var str = Configuration.GetConnectionString("LocalDb");
				return new ApplicationDbConnectionFactory(str);
			});

			services.AddSwaggerGen();


			services.AddMvc(option => option.EnableEndpointRouting = false)
				.AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix,options=> options.ResourcesPath= "Resources");

			services.Configure<RequestLocalizationOptions>(options =>
			{
				var supportedCulture = new[]
				{
					new CultureInfo("uz"),
					new CultureInfo("ru")
				};
				options.DefaultRequestCulture = new RequestCulture("uz");
				options.SupportedCultures = supportedCulture;
				options.SupportedUICultures = supportedCulture;
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			app.UseSwagger();
			
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
				// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
				app.UseHsts();
			}
			app.Use(async (context, next) =>
			{
				if (!context.Request.Cookies.ContainsKey(CookieRequestCultureProvider.DefaultCookieName))
				{
					context.Response.Cookies.Append(
					CookieRequestCultureProvider.DefaultCookieName,
					CookieRequestCultureProvider.MakeCookieValue(new RequestCulture("ru")),
					new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) });
				}
				await next();
			});
			var options = app.ApplicationServices.GetService<IOptions<RequestLocalizationOptions>>();
			app.UseRequestLocalization(options.Value);

			app.UseSwaggerUI(s =>
			{
				s.SwaggerEndpoint("/swagger/v1/swagger.json", "MY API 1");
			});

			app.UseHttpsRedirection();
			app.UseStaticFiles();

			app.UseRouting();

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllerRoute(
					name: "default",
					pattern: "{controller=Home}/{action=Index}/{id?}");
			});

			app.UseSpa(spa =>
			{
				string strategy = Configuration.GetValue<string>("DevTools:ConnectionStrategy");
				if (strategy == "proxy")
				{
					spa.UseProxyToSpaDevelopmentServer("http://127.0.0.1:4200");
				}
				else if (strategy == "managed")
				{

					spa.Options.SourcePath = "../ClientApp"; spa.UseAngularCliServer("start");
				}
			});
		}
	}
}
