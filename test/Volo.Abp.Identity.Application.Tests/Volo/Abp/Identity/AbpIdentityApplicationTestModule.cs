﻿using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Autofac;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Volo.Abp.Identity
{
    [DependsOn(
        typeof(AbpIdentityApplicationModule), 
        typeof(AbpIdentityEntityFrameworkCoreModule), 
        typeof(AbpAutofacModule),
        typeof(AbpIdentityDomainTestModule))]
    public class AbpIdentityApplicationTestModule : AbpModule
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddAssemblyOf<AbpIdentityApplicationTestModule>();
        }
    }
}
