<div align="center" >

# Development Setup

</div>

**WARNING: DON'T FORK THIS REPOSITORY. CLONE IT AND MAKE CHANGES TO YOUR
LOCAL COPY. See [workflow](#workflow) and [submission](#submission).**

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
[../src/1/1.test.ts](../src/1/1.test.ts). Run the above command(`yarn test`) to see the test passes.

I have done my best to design challenges that reflect real life
situations so hopefully you won't find them boring.

## Workflow

### Environment setup

1. Don't fork this repository. Clone it, maybe upload it to a private
   repository on your GitHub profile. This is required to make sure the
   contestants are working independently. We don't want you to share
   answers with each other.
2. Install node and yarn
3. Go to the directory containing this repository and run

```bash
yarn install
```

4. Verify dev environment setup by running

```bash
yarn test
```

Output should be similar to

```bash
➜  docs git:(main) ✗ yarn test
yarn run v1.22.11
$ yarn jest
$ /home/aravinth/code/wsoc/WSoC2103-TestRepo/node_modules/.bin/jest
 PASS  src/1/1.test.ts
  ✓ add works (3 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 1.ts     |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.823 s, estimated 2 s
Ran all test suites.
Done in 2.72s.
```

### Every challenge

1. Solve a challenge
2. Uncomment test suite
3. Run tests with `yarn test`
4. Commit your changes to git. If you are new to git, see [introduction
   to git] to get started.
5. Optionally, push it to a private repository on your GitHub profile.
6. Go to step 1

### Submission

Create a tarball or a zip file. Be sure to delete `node_modules`
directory before compressing. You can either send it via email to
realaravinth@batsense.net or via Discord at realaravinth#4111. **BUT
DON'T SEND PULL REQUESTS.**

## Resources

- Node: https://nodejs.org/dist/v16.6.1/
- Yarn: https://yarnpkg.com/getting-started/install/
- TypeScript cheatsheet: https://rogerdudler.github.io/git-guide/
- [Introduction to git]
- Mozilla Developer Network(MDN), the webdev bible: https://developer.mozilla.org/en-US/

As always, feel free to contact me if you require assistance.

[introduction to git]: https://rogerdudler.github.io/git-guide/
