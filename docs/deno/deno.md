# Deno

Next generation TypeScript and JavaScript runtime.

## General thoughts

Really cool and polished. A breath of fresh air, when compared to NodeJS.

I used to say that, if you want TypeScript just for types, you can use Go instead.
Deno is the middle ground. I feel working with TypeScript is just a lot better:

* No build step
* Supports ES modules out of the box
* Supports TypeScript out of the box
* Supports NPM packages (somewhat, see [this issue](https://github.com/denoland/deno/issues/18836))
* Supports Edge deployment, on tools like [Vercel](/vercel/), [Netlify](/netlify) edge functions
* Has it's own edge network called [Deno Deploy](https://deno.land/deploy)

I didn't use JavaScript yet with Deno, which actually speaks volumes.

Deno supports compilation, which is actually huge for command line applications. You can distribute a binary if people don't want to run Deno, or they can just run the file themselves. I like how Deno scales well for single file, demo apps but also large projects.

I also started developing [NGBS](/projects/ngbs), my own version of command line tooling using Deno. I'll keep an eye out on how to explore it more.

## Links

* [Cliffy](https://cliffy.io/): command line framework
* [Dax](https://github.com/dsherret/dax): cross platform shell tools, inspired by ZX
* [Zod](https://zod.dev/): TypeScript-first schema validation with static type inference
