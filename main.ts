import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const data = await prisma.test.upsert({
    create: {
      test: {
        something: "test",
      },
    },
    update: {
      test: {
        updated: "test2",
      },
    },
    where: {
      id: "something",
    },
  });
  console.log(data);
  prisma.$disconnect();
}

main();
