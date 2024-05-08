import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            name: "Neyaz Alam"
        }
    })
}

main().then(async () => {
    console.log("done with query")
    prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    prisma.$disconnect()
    process.exit(1)
})
