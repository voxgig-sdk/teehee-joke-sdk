<?php
declare(strict_types=1);

// TeeheeJoke SDK base feature

class TeeheeJokeBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TeeheeJokeContext $ctx, array $options): void {}
    public function PostConstruct(TeeheeJokeContext $ctx): void {}
    public function PostConstructEntity(TeeheeJokeContext $ctx): void {}
    public function SetData(TeeheeJokeContext $ctx): void {}
    public function GetData(TeeheeJokeContext $ctx): void {}
    public function GetMatch(TeeheeJokeContext $ctx): void {}
    public function SetMatch(TeeheeJokeContext $ctx): void {}
    public function PrePoint(TeeheeJokeContext $ctx): void {}
    public function PreSpec(TeeheeJokeContext $ctx): void {}
    public function PreRequest(TeeheeJokeContext $ctx): void {}
    public function PreResponse(TeeheeJokeContext $ctx): void {}
    public function PreResult(TeeheeJokeContext $ctx): void {}
    public function PreDone(TeeheeJokeContext $ctx): void {}
    public function PreUnexpected(TeeheeJokeContext $ctx): void {}
}
