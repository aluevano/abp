﻿using System.Threading.Tasks;

namespace Volo.Abp.Authorization.Permissions
{
    public static class PermissionCheckerExtensions
    {
        public static async Task<bool> IsGrantedAsync(this IPermissionChecker permissionChecker, string name)
        {
            return (await permissionChecker.CheckAsync(name)).IsGranted;
        }

        //TODO: Add sync extensions
    }
}
