import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.aircraft.createMany({
    data: [
      { model: 'Boeing 737', flightNumber: 'JU123', altitude: 11000, speed: 850 },
      { model: 'Airbus A320', flightNumber: 'LH400', altitude: 10000, speed: 780 },
      { model: 'Boeing 777', flightNumber: 'BA202', altitude: 12000, speed: 905 },
      { model: 'Airbus A380', flightNumber: 'EK101', altitude: 11500, speed: 920 },
      { model: 'Boeing 787', flightNumber: 'UA301', altitude: 12500, speed: 900 },
      { model: 'Airbus A350', flightNumber: 'AF550', altitude: 11800, speed: 910 },
      { model: 'Boeing 747', flightNumber: 'QF001', altitude: 13000, speed: 890 },
      { model: 'Embraer E195', flightNumber: 'WN88', altitude: 9000, speed: 720 },
      { model: 'Bombardier CRJ900', flightNumber: 'DL432', altitude: 8500, speed: 695 },
      { model: 'ATR 72', flightNumber: 'OU211', altitude: 7000, speed: 510 },
    ],
  });

  console.log('Seeded 10 aircraft records');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

  // run 
  // npx prisma db seed