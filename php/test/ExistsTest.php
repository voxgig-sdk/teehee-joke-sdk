<?php
declare(strict_types=1);

// TeeheeJoke SDK exists test

require_once __DIR__ . '/../teeheejoke_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TeeheeJokeSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
