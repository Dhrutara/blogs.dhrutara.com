using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;

[assembly: FunctionsStartup(typeof(Dhrutara.Blogs.Api.Startup))]

namespace Dhrutara.Blogs.Api
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddSingleton<IService>((s) =>
            {
                return new Service();
            });
        }
    }
}
