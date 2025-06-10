import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create dummy users
  const users = [
    {
      email: 'john.doe@example.com',
      name: 'John Doe',
    },
    {
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
    },
    {
      email: 'bob.wilson@example.com',
      name: 'Bob Wilson',
    },
    {
      email: 'alice.johnson@example.com',
      name: 'Alice Johnson',
    },
    {
      email: 'charlie.brown@example.com',
      name: 'Charlie Brown',
    },
  ];

  console.log('Start seeding...');

  for (const user of users) {
    const createdUser = await prisma.user.create({
      data: user,
    });
    console.log(`Created user with id: ${createdUser.id}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
