import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info', 'query']})


async function main(){
    let res = await prisma.user.findMany({
        where:{
            email:{
                endsWith:"gmail.com"
            },
            posts:{
                some:{
                    published:true
                }
            }
        },
        include:{
            posts:{
                where:{
                    published:true
                }
            }
        }
    })
    console.log(res)
}

main().then(async()=>{
    console.log("done advance queury")
    prisma.$disconnect()
}).catch(async(e)=>{
    console.log(e)
    prisma.$disconnect()
    process.exit(1)
})