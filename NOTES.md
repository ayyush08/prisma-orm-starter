- To initialise prisma into your project
```bash
    npx prisma init --datasource-provider postgresql
```

- To create migrations i.e, to make prisma able to interact to and be in sync with our database and update our client
```bash
    npx prisma migrate dev --name init
 ```