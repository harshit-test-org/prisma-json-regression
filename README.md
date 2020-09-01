## Introduction

Reproduction for JSON type related queries failing on 2.6


### Steps

1. Clone the repository and run yarn or npm
2. Replace creds in `prisma/.env` and run `npx prisma migrate save --experimental&& npx prisma migrate up --experimental`
3. Run `npm run start`

## Version

```
yarn run v1.22.4
$ /Users/harshit/code/reproductions/issue-test_json_prisma/node_modules/.bin/prisma -v
@prisma/cli          : 2.6.0
Current platform     : darwin
Query Engine         : query-engine 650b5d0348ec38ae61e1e7db69bb54808418ede4 (at node_modules/@prisma/cli/query-engine-darwin)
Migration Engine     : migration-engine-cli 650b5d0348ec38ae61e1e7db69bb54808418ede4 (at node_modules/@prisma/cli/migration-engine-darwin)
Introspection Engine : introspection-core 650b5d0348ec38ae61e1e7db69bb54808418ede4 (at node_modules/@prisma/cli/introspection-engine-darwin)
Format Binary        : prisma-fmt 650b5d0348ec38ae61e1e7db69bb54808418ede4 (at node_modules/@prisma/cli/prisma-fmt-darwin)
Studio               : 0.272.0
Done in 1.20s.
```
