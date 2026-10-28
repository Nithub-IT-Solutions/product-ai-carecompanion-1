# Next process

Status: CEO approved; discovery workflow queued.

## Roadmap

1. **Discovery:** the approved discovery workflow researches the opportunity and opens a Gate 1 PR.
2. **Idea approval:** the CEO reviews the evidence and merges the Gate 1 PR, or requests changes with feedback.
3. **Product definition:** prepare the PRD, MVP scope, and user experience; the CEO approves Gate 2.
4. **Build planning:** prepare architecture, security, delivery, cost, and test plans; the CEO approves Gate 3.
5. **Build and release:** deliver in reviewed feature PRs, then prepare a release PR for CEO approval.

This repository contains the product-specific Claude Code agents and workflow. Each CEO gate is a human decision. Agents must not approve or merge pull requests or push directly to `main`.

See the [discovery workflow](../.github/workflows/idea-discovery.yml) and [tracking issue](https://github.com/Nithub-IT-Solutions/Company-hq/issues/1).
