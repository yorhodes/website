# Overview

This is my attempt at creating a minimal, modular personal website. It is designed to be forkable and easy to maintain. You don't even need to know Typescript!

## Layout

The author's personal website content is defined as simple JSON blobs in the [data](./data) directory.

Personal content must match the schema defined as Typescript interfaces in the [types](./types.ts) file (enforced at build time).

Functions in the [components](./components) directory transform static content that matches the schema to responsive React components.

Functions in the [pages](./pages) directory map content to components and organize results into a digestible and navigable website layout.

## Tools

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Components and themes from [Chakra UI](https://chakra-ui.com/).

[yorke.dev](https://yorke.dev) is deployed with [Vercel](https://vercel.com/) from the [yorke](https://github.com/yorhodes/website/tree/yorke) branch.
