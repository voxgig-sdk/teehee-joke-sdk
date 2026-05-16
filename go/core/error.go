package core

type TeeheeJokeError struct {
	IsTeeheeJokeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTeeheeJokeError(code string, msg string, ctx *Context) *TeeheeJokeError {
	return &TeeheeJokeError{
		IsTeeheeJokeError: true,
		Sdk:              "TeeheeJoke",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TeeheeJokeError) Error() string {
	return e.Msg
}
