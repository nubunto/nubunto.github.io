# Next Generation Bash Scripts

Or, "nubunto's greatest bash scripts". I'm bad at names.

It's a little project I started, that aims to provide comprehensive and productive command line tooling, that users can hand-build into their workflow.

Built in TypeScript, with [Deno](/deno) and Dax.

## Tools

All files inside the `bin/` folder in the root of the project get compiled using `deno compile`. They are then placed in `$HOME/bin`.

There's a sensibly provided `$` function, which is basically a direct re-export of Dax's `$` utility that allows you to call into the command line seamlessly.

I was even able to use [gum](https://github.com/charmbracelet/gum) with it.

