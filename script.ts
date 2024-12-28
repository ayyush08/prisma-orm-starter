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
    //             email:"ayush@gmail.com",
    //             age:20
    //         },
    //         {
    //             name:"Curator",
    //             email:"curator@gmail.com",
    //             age:21
    //         }
    //     ]
    //     //NOTE: cannot use select clause with createMany
    // })
    // console.log(users);
    




}

main()
.catch(e=>{
    console.error(e.message)
}).finally(async()=>{
    await prisma.$disconnect()
})

//even though disconnection is automatic, it is kinda recommended as a good practice to disconnect after our work is done