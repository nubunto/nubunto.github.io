# Temporal

Temporal is a durable execution platform.

In essence, it is state machines done right: you build workflows, which is just a fancy word for "stuff you need to do sequentially over a period of time". Then, Temporal makes sure that the "stuff you need to do" part is retried automatically, if you want it to be.

Also, you get to scale horizontally, since these workflows are decoupled. The only point of failure is Temporal itself, however, it is comprised of several different services that you can (and should) scale differently.

I find it to be quite enjoyable, specially the Typescript SDK. There are SDKs for Java, Go, Python, PHP and .NET, but the Python and Typescript one are different. They make it even harder to bring in sources of non-determinism, which breaks Temporal guarantees.

In the end, I find Temporal to be amazing for developers and pretty hard to operate reliably at large scales. Temporal has a cloud offering, so it might be interesting for companies that are US based.
