import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    //we write our prisma client queries here
    
}

main()
.catch(e=>{
    console.error(e.message)
}).finally(async()=>{
    await prisma.$disconnect()
})

//even though disconnection is automatic, it is kinda recommended as a good practice to disconnect after our work is done