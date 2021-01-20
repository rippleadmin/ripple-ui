<?php

namespace RippleAdmin\RippleUi;

use Illuminate\Support\ServiceProvider;
use RippleAdmin\Ripple;

class RippleUiServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        Ripple::pluginRoutes(__DIR__.'/../routes/ripple-ui.php');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Ripple::js('js/main.js', 'vendor/ripple-ui');
    }
}
