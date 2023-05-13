// import { Prisma, PrismaClient } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface FakePlayer {
  name: string;
  email: string;
}

const fakePlayers: FakePlayer[] = [
  { name: "John Doe", email: "johndoe@www.com" },
];

const test = prisma.player.create({
  data: { name: "John Doe", email: "test@etst.com}}" },
});

const createFakePlayer = prisma.player.create({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  data: fakePlayers[0]!,
});

async function main() {
  console.log(`Start seeding ...`);
  const res = await test;
  console.log(res);

  // const words = [];
  // for (const w of wordsList) {
  //     const word = await prisma.word.create({
  //         data: w,
  //     });
  //     words.push(word);
  //     console.log(`Created user with id: ${word.id}`);
  // }
  // console.log(words);
  //   for (const u of userData) {
  //     const user = await prisma.user.create({
  //       data: u,
  //     });
  //     console.log(`Created user with id: ${user.id}`);
  //   }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
