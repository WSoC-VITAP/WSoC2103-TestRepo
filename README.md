<div align="center">
<img src="docs/logo.svg" alt="Identity Logo" width="180" height="160" />

<h1>Identity</h1>
<b> Bleeding edge decentralized, privacy respecting identity management system </b>

</div>

<br /> <br />
<div align="center">

**See [HACKING.md](./docs/HACKING.md) to get started with the challenge**
</div>

## Why?

In this era, where internet has become an extension of our lives,
it is imperative that netizens have complete ownership of their identities.

Signing up for websites using Facebook ID is convenient but with a
cost: we are giving complete a third party, like Facebook, have complete
control over our identity.
[There](https://techcrunch.com/2021/08/04/facebook-ad-observatory-nyu-researchers/)
[have](https://www.reuters.com/article/us-apple-epic-games-idUSKBN25O2YM?taid=5f49a3eb46b85b00016a950c)
[been](https://reddit.com/mc4vh1) [countless](https://reddit.com/kaztna)
[occurrences](https://reddit.com/n5eyrk) where users' accounts were
terminated for no reason or to benefit the service provider. Imagine
having an account on one of these providers, linking all third party
accounts(Medium, Reddit, etc.) to it (using those "Continue with
Google/Facebook" login buttons) and your account gets terminated: not
only do you lose access to the terminated account, but you also lose
access to your linked accounts --- effectively losing your identity on
the internet.

We propose a mechanism that enables self-reliance: where you can be your
own service provider, where you can't be locked out of your accounts,
where you can become truly anonymous if you chose to, where the
websites that you choose to visit are no one's business but yours. The
internet used to be this way before Big Brother Inc took over, with
projects like these **we are taking control back.**

## How?

Client-server architecture is the most popular way to develop
services(websites on the internet). With client-server architecture,
there's an unequal power distribution between the parties involved: the
server has higher privileges than the client. This creates a dependency
where the client can't function without the availability of a server and
as a result, service providers have an unfair advantage over users. You
can host your own servers, like I do at https://batsense.net/services,
but it's not something that everyone can do or even want to do.

With peer-to-peer architecture(p2p), all parties involved have the same
level of privileges. A p2p architecture doesn't require servers to
function. The post popular p2p implementation is BitTorrent: it's p2p
nature is the only factor that's preventing censorship. So it's also
more robust than a centralized architecture like the client-server model.

Decentralizing online identity will provide the same benefits.
[IPFS](https://ipfs.io) is a decentralised protocol that's becoming
increasingly popular([see Brave implements
IPFS](https://www.theverge.com/2021/1/19/22238334/brave-browser-ipfs-peer-to-peer-decentralized-transfer-protocol-http-nodes)).
It provides a framework to build decentralized applications that can run
independently of the public internet. With IPFS, you can create a
private network where the user data can be synchronized all the devices
that a user owns. This way, not only does the user have complete
ownership of their data, but also the app would continue to function in
poor connectivity conditions.

## Scope

This is a research scope. Decentralized identity is a novel idea that
has never been done before outside the blockchain context(we are not
a blockchain). If successful, this could provide a foundation for other
applications, decentralized or not, to build upon. We could become the
accounts.google.com of the future.

## Difficulty

This project uses cryptography techniques in additions to
decentralization methods. Both of them are of intermediate to hard
difficulty levels. Future developers should have unwavering
determination towards the goal, for decentralization has many pitfalls,
and it's easy to become demotivated.

## Skills required

This project doesn't have a backend component.

- JavaScript/TypeScript
- HTML/CSS

IPFS and cryptography will be introduced during the learning period.
Prior experience is not required.
