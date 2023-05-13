import { PrismaClient } from "@prisma/client";

// Need to manually reset after each seeding otherwise this fails ATM.
// pnpm prisma migrate reset --skip-seed
// pnpm prisma db seed
const prisma = new PrismaClient();

// interface FakePlayer {
//   name: string;
//   email: string;
// }

const generateFakePlayer = () => {
  const fakeName = "Generate fake name here";
  const fakeEmail = "Generate fake email here";

  return { name: fakeName, email: fakeEmail };
};

const createFakePlayer = prisma.player.create({
  data: generateFakePlayer(),
});

async function main() {
  console.log(`Start seeding ...`);
  const res = await createFakePlayer;
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
