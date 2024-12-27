import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
    console.log(await prisma.user.findMany());
    
    
}

main()
.catch(e=>{
    console.error(e.message)
}).finally(async()=>{
    await prisma.$disconnect()
})

//even though disconnection is automatic, it is kinda recommended as a good practice to disconnect after our work is done