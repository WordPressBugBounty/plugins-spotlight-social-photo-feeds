<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5d9c133150599e0f6bac1c0fad6f7541
{
    public static $files = array (
        '7b11c4dc42b3b3023073cb14e519683c' => __DIR__ . '/..' . '/ralouphie/getallheaders/src/getallheaders.php',
    );

    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'RebelCode\\WordPress\\Http\\' => 25,
            'RebelCode\\Spotlight\\Instagram\\Vendor\\' => 37,
            'RebelCode\\Spotlight\\Instagram\\Pro\\' => 34,
            'RebelCode\\Spotlight\\Instagram\\Performance\\' => 42,
            'RebelCode\\Spotlight\\Instagram\\Modules\\' => 38,
            'RebelCode\\Spotlight\\Instagram\\Essentials\\' => 41,
            'RebelCode\\Spotlight\\Instagram\\' => 30,
            'RebelCode\\Psr7\\' => 15,
            'RebelCode\\Iris\\' => 15,
            'RebelCode\\Atlas\\' => 16,
        ),
        'P' => 
        array (
            'Psr\\Log\\' => 8,
            'Psr\\Http\\Message\\' => 17,
            'Psr\\Http\\Client\\' => 16,
            'Psr\\Container\\' => 14,
        ),
        'L' => 
        array (
            'Liborm85\\ComposerVendorCleaner\\' => 31,
        ),
        'D' => 
        array (
            'Dhii\\Util\\String\\' => 17,
            'Dhii\\Transformer\\' => 17,
            'Dhii\\Services\\' => 14,
            'Dhii\\Output\\' => 12,
            'Dhii\\Factory\\' => 13,
            'Dhii\\Exception\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'RebelCode\\WordPress\\Http\\' => 
        array (
            0 => __DIR__ . '/..' . '/rebelcode/wp-http/src',
        ),
        'RebelCode\\Spotlight\\Instagram\\Vendor\\' => 
        array (
            0 => __DIR__ . '/../..' . '/vendor_scoped/psr4',
        ),
        'RebelCode\\Spotlight\\Instagram\\Pro\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/pro',
        ),
        'RebelCode\\Spotlight\\Instagram\\Performance\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/performance',
        ),
        'RebelCode\\Spotlight\\Instagram\\Modules\\' => 
        array (
            0 => __DIR__ . '/../..' . '/modules',
        ),
        'RebelCode\\Spotlight\\Instagram\\Essentials\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/essentials',
        ),
        'RebelCode\\Spotlight\\Instagram\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/core',
        ),
        'RebelCode\\Psr7\\' => 
        array (
            0 => __DIR__ . '/..' . '/rebelcode/psr7/src',
        ),
        'RebelCode\\Iris\\' => 
        array (
            0 => __DIR__ . '/..' . '/rebelcode/iris-engine/src',
        ),
        'RebelCode\\Atlas\\' => 
        array (
            0 => __DIR__ . '/..' . '/rebelcode/atlas/src',
        ),
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-factory/src',
            1 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Psr\\Http\\Client\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-client/src',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
        'Liborm85\\ComposerVendorCleaner\\' => 
        array (
            0 => __DIR__ . '/..' . '/liborm85/composer-vendor-cleaner/src',
        ),
        'Dhii\\Util\\String\\' => 
        array (
            0 => __DIR__ . '/..' . '/dhii/stringable-interface/src',
        ),
        'Dhii\\Transformer\\' => 
        array (
            0 => __DIR__ . '/..' . '/dhii/transformer-interface/src',
        ),
        'Dhii\\Services\\' => 
        array (
            0 => __DIR__ . '/..' . '/dhii/services/src',
        ),
        'Dhii\\Output\\' => 
        array (
            0 => __DIR__ . '/..' . '/dhii/output-renderer-interface/src',
        ),
        'Dhii\\Factory\\' => 
        array (
            0 => __DIR__ . '/..' . '/dhii/factory-interface/src',
        ),
        'Dhii\\Exception\\' => 
        array (
            0 => __DIR__ . '/..' . '/dhii/exception-interface/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5d9c133150599e0f6bac1c0fad6f7541::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5d9c133150599e0f6bac1c0fad6f7541::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5d9c133150599e0f6bac1c0fad6f7541::$classMap;

        }, null, ClassLoader::class);
    }
}
