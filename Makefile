include node_modules/make-lint/index.mk

LINT_CONFIG = .eslintrc

all: example

example:
	beefy example/index.js

.PHONY: example
