import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    // log:["query"] //logs all queries
}) // manages different connnections for us, if db contains 5 different connections prisma will handle that for us, So it's really important to keep it in check that we only use one instance of this client otherwise it'll bog down our database

async function main(){
    //we write our prisma client queries here

    // Create a new user
    // const user = await prisma.user.create({
    //     data:{
    //         name:"Sova"
    //     }
    // })
    // console.log(user)

    //Fina all users
    // console.log(await prisma.user.findMany());
    
    //delete all users
    // await prisma.user.deleteMany()

    //------------------
    //Create - (use createMany and pass an Array of users to create multiple users at once)
    // const user = await prisma.user.create({
    //     data:{
    //         name:"Ayush",
    //         email:"curator@gmail.com",
    //         age:24,
    //         userPreference:{
    //             create:{
    //                 emailUpdates: true
    //             }
    //         }
    //     },
        //YOU CAN ONLY DO WITHER SELECT OR INCLUDE AT ONE TIME AS PER USE CASE
        //INCLUDE will include relations
        //SELECT will let you hard code exact values you want from current or nest it too with related ones
        // include:{
        //     userPreference: true
        // },
        // select:{
        //     name:true,
        //     userPreference:{
        //         select:{
        //             id:true
        //         }
        //     }
        // }
    // })

    // const users = await prisma.user.createMany({
    //     data:[
    //         {
    //             name:"Ayush",
    //             email:"ayush4@gmail.com",
    //             age:21
    //         },
    //         {
    //             name:"Curator",
    //             email:"curator4@gmail.com",
    //             age:22
    //         }
    //     ]
    //     //NOTE: cannot use select clause with createMany
    // })
    
    
    //------------------
    //Read
    // to read unique values
    // const user = await prisma.user.findUnique({
    //     where:{
    //         // email:"curator@gmail.com"// find a user with this email
    //         age_name:{//this is how we can use composite keys or in other word the @@unique constraint keys to find a unique user
    //             age:20,
    //             name:"Ayush"
    //         }
    //     }
    // })
    //findFirst - find the very first user that matches the query
    //findMany - find all users that match the query as an array
    
    //Filtering and Distinctness
    // const user = await prisma.user.findMany({
    //     where:{
    //         // name:"Ayush" or
    //         // name: {equals: "Ayush"}
    //         // name: { not:"Ayush"} // users NOT with this name
    //         // name:{in:["Ayush","Curator"]} //users with these names
    //         // name:{notIn:["Ayush","Curator"]} //users NOT with these names
    //         // age: {lt:25} //less than 20 age (can also got gt,gte,lte)
    //         // email: {
    //         //     contains: "@gmail.com" //users with email containing this string
    //         //     //endsWith , startWith
    //         // }
    //     },
    //     // distinct:["name","age"] //this will return only one user with the name Ayush
    //     // take:2, //how many you want to return
    //     // skip: 1 // skipping 1st
    //     orderBy: {
    //         age:"desc"
    //     }
    // })
    // const user = await prisma.user.findMany({
        // where:{
            // AND:[ //combining multiple queries
            //     {
            //         email: {
            //             endsWith: "@gmail.com"
            //         }
            //     },
            //     {
            //         name: "Ayush"
            //     }
            // ],
            // OR:[ // returns all users that match given email OR age
            //     {
            //         email: {
            //             startsWith:"curator"
            //         }
            //     },
            //     {
            //         age: 21
            //     }
            // ]
            // NOT:[ //negates everything inside
            //     {
            //         email:{
            //             startsWith:"curator"
            //         }
            //     }
            // ]
    //     }
    // })

    //Relationship filtering
    // const users = await prisma.user.findMany({
        // where:{
            //one to one
            // userPreference:{
            //     emailUpdates:true
            // }
            // writtenPosts:{
                // every:{
                //     title: "Test" //every post written by user with title Test (if none have title Test, it'll every user)
                // }
                //none: to return things with nothing of given
                //some: to return things with atleast one of given
            // }
        // }
    // })

    // const users = await prisma.post.findMany({
    //     where:{
    //         author:{
    //             is:{
    //                 age:21// gives all posts with age 21
    //             } // isNot is just opposite
    //         }
    //     }
    // })

    //------------------------------
    //Update
    //update - updates first user that matches the query
    //updateMany - updates all users that match the query
    // const users = await prisma.user.updateMany({
    //     data:{
    //         age:{
    //             divide:10, //can do all arithmetic ops too

    //         }
    //     },
    //     where:{
    //         email:"ayushvy@gmail.com"
    //     }
    // // doesnot allow include and select similar to findmany
    // })


    //Connect/Disconnect existing relations (also available in create)
    // const preference = await prisma.userPreference.create({
    //     data:{
    //         emailUpdates:true
    //     }
    // }) //{ id: '03753574-249d-401d-838f-b5c36c989bcd', emailUpdates: true }
    // const preference = await prisma.user.update({
    //     where:{
    //         email:"ayushvy@gmail.com"
    //     },
    //     data:{
    //         userPreference:{
    //             connect:{ //cpnnecting the existing userPreference to the user 
    //disconnect - to remove connceted objeccts
    //                 id:"03753574-249d-401d-838f-b5c36c989bcd"
    //             }
    //         }
    //     }
    // })
    const preference = await prisma.user.findFirst({
        where:{
            name:"Ayush",
            email:{
                startsWith:"ayushvy"
            }
        },
        include:{
            userPreference:true
        }
    })
    console.log(preference);


    //------------------------------
    //delete - delete one based on query
    //deleteMany - delete many based on query
}

main()
.catch(e=>{
    console.error(e.message)
}).finally(async()=>{
    await prisma.$disconnect()
})

//even though disconnection is automatic, it is kinda recommended as a good practice to disconnect after our work is done