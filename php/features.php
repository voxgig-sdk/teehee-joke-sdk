<?php
declare(strict_types=1);

// TeeheeJoke SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TeeheeJokeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TeeheeJokeBaseFeature();
            case "test":
                return new TeeheeJokeTestFeature();
            default:
                return new TeeheeJokeBaseFeature();
        }
    }
}
