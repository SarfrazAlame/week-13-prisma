
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: "Sarfraz Khan",
            email: "sarfrazk7858@gmail.com",
        }
    })
}

main()
    .then(async () => {
        console.log("done with query")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })