using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Demo.Api
{
    public class Startup
    {
        const string CORSPolicyName = "AllowMyApps";
        const string CLOUDFRONT_DNS_NAME = "https://d6anx9r4eyxd.cloudfront.net";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(CORSPolicyName,
                    builder =>
                    {
                        builder.WithOrigins(
#if DEBUG
                            "http://localhost:4200", // 4200 is Angular's default port
#endif
                            CLOUDFRONT_DNS_NAME);
                    });
            });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseCors(CORSPolicyName);

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute("default", "api/{controller=WeatherForecast}/{action=Get}/{id?}");
                //endpoints.MapControllers();
            });
        }
    }
}
