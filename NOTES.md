- To initialise prisma into your project
```bash
    npx prisma init --datasource-provider postgresql
```

- To create migrations i.e, to make prisma able to interact to and be in sync with our database and update our client
```bash
    npx prisma migrate dev --name init
 ```

- To generate prisma client

```bash
npm i @prisma/client
```
but when we want to manually want to generate our client based on our present setup

```bash
npx prisma generate
```

NOTE:
 - Must have only one datasource provider but may have multiple generators depending on requirements


 Field types:
 integer,string,boolean,BigInt,float,datetime,json,bytes,unsupported

 type modifiers
 ?
 []
 