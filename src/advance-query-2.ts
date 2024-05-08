import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['info', 'query'] })

async function main() {
    let res = await prisma.post.findMany({
        take: 1
    })
    console.log(res)
}


main()