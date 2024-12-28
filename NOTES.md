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

Type modifiers
 ?
 []


Field level Attributes:
@id - to specify a field as primary key
@default - to specify a default value for a field
@unique - to specify a field as unique
@relation - to specify a relation between two models
@updatedAt - to specify a field that will be updated automatically when a record is updated
@default(now()) - to specify a field that will be updated automatically when a record is created

Block level Attributes: @@ to represent block level attributes
@@unique - to specify a unique constraint on a array of fields
@@index - to specify an index on a array of fields

Enums:

Enums are a special type of scalar that is restricted to a particular set of values. This allows you to: 
- Constrain a field to only be one of a set of predefined values
- Communicate through the schema that a field will only ever be one of a specific set of strings

```prisma
enum Role {
  USER
  ADMIN
  MODERATOR
}
```
