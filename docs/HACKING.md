<div align="center" >

# Development Setup

</div>

**WARNING: DON'T FORK THIS REPOSITORY. CLONE IT AND MAKE CHANGES TO YOUR
LOCAL COPY. See [workflow](#workflow)**

## Dependencies

This repository uses nodejs(`v16.6.1`) and yarn. I've seen instances
where node version mismatch resulted in build failure so please use the
version specified

- Node: https://nodejs.org/dist/v16.6.1/
- Yarn: https://yarnpkg.com/getting-started/install/

## TypeScript

This repo uses TypeScript. I believe using TypeScript over JavaScript
results in fewer errors. Getting started with TypeScript is easy,
[this](https://learnxinyminutes.com/docs/typescript/) is all the
TypeScript that I know. I suggest you refer to the link provided when
there's a build failure.

Also, because TypeScript is not a requirement for this project, feel
free to reach out to me if you need TypeScript-specific help during the
course of this event.

## Game plan

This repository contains many sets of challenges. Each set is in a
dedicated directory(folder) in [src/](../src) and each set will contain
one or more challenges. The sets and the challenges are arranged in an
increasing order of difficulty. The more you solve the higher your
score.

Each challenge(in every set) has an accompanying test suite. You are
required to solve the challenge and uncomment the respective test suite.
For challenges, function signature(function name and arguments) will be
specified in the challenge).

### Run tests

```bash
yarn test
```

For instance, [Set 1 challenge 1](../src/1/1.ts) has a demo challenge
that has been solved and it's accompanying test suite is available in
[../src/1/1.test.ts](../src/1/1.test.ts). Run the above command(`yarn
test`) to see the test passes.

I have done my best to design challenges that reflect real life
situations so hopefully you won't find them boring.


## Workflow

1. Don't fork this repository. Clone it, maybe upload it to a private
   repository on your GitHub profile. This is required to make sure the
   contests and working independently. We don't want you to share
   answers with each other.
2. Solve a challenge
3. Uncomment test suite
4. Run tests with `yarn test`
5. Commit your changes to git. If you are new to git, see [introduction
   to git] to get started.
6. Optionally, push it to a private repository on your GitHub profile.
7. Go to step 1

## Resources

- Node: https://nodejs.org/dist/v16.6.1/
- Yarn: https://yarnpkg.com/getting-started/install/
- TypeScript cheatsheet: https://rogerdudler.github.io/git-guide/
- [Introduction to git]
- Mozilla Developer Network(MDN), the webdev bible: https://developer.mozilla.org/en-US/

As always, feel free to contact me if you require assistance.

[introduction to git]: https://rogerdudler.github.io/git-guide/
