Good. That’s the sane way to learn NestJS. Build incrementally instead of materializing a full “enterprise architecture” in one sitting like some cursed software necromancy ritual.

We’ll do this in phases.

Phase 1:

* create app
* create Aircraft module
* hardcoded data
* understand controllers/services/modules

No database.
No auth.
No Prisma.
No JWT.

Just understand Nest first.

Project goal at end of Phase 1:

GET /aircrafts

returns:

[
  {
    "id": 1,
    "model": "Boeing 737",
    "flightNumber": "JU123"
  }
]

Step 1. Create project

Install Nest CLI:

npm i -g @nestjs/cli

Create app:

nest new aircraft-api

Choose npm.

Go inside:

cd aircraft-api

Run app:

npm run start:dev

Open:

http://localhost:3000

You should see:

Hello World!

Tiny miracle. Thousands of transistors cooperating briefly before entropy resumes.

Step 2. Understand initial structure

You’ll get:

src/
  app.controller.ts
  app.service.ts
  app.module.ts
  main.ts

Important concepts:

main.ts

* bootstraps app

app.module.ts

* root module

controller

* handles HTTP requests

service

* business logic

module

* groups related functionality

Step 3. Generate Aircraft module

Run:

nest g module aircraft

Creates:

src/aircraft/aircraft.module.ts

Now generate controller:

nest g controller aircraft

Generate service:

nest g service aircraft

Now structure becomes:

src/
  aircraft/
    aircraft.controller.ts
    aircraft.module.ts
    aircraft.service.ts

This is your first feature module.

Step 4. Understand the module

Open:

// aircraft.module.ts

You’ll see:

import { Module } from '@nestjs/common';
import { AircraftController } from './aircraft.controller';
import { AircraftService } from './aircraft.service';
@Module({
  controllers: [AircraftController],
  providers: [AircraftService],
})
export class AircraftModule {}

Meaning:

* this module owns AircraftController
* this module owns AircraftService

Nest dependency injection now knows:
“if controller needs AircraftService, create one.”

Step 5. Import AircraftModule into AppModule

Open:

app.module.ts

Add:

import { AircraftModule } from './aircraft/aircraft.module';

Then:

@Module({
  imports: [AircraftModule],
})

Final:

import { Module } from '@nestjs/common';
import { AircraftModule } from './aircraft/aircraft.module';
@Module({
  imports: [AircraftModule],
})
export class AppModule {}

Now the aircraft feature becomes part of the app.

Step 6. Add fake data in service

Open:

aircraft.service.ts

Replace everything:

import { Injectable } from '@nestjs/common';
@Injectable()
export class AircraftService {
  private aircrafts = [
    {
      id: 1,
      model: 'Boeing 737',
      flightNumber: 'JU123',
      altitude: 11000,
      speed: 850,
    },
    {
      id: 2,
      model: 'Airbus A320',
      flightNumber: 'LH400',
      altitude: 10000,
      speed: 780,
    },
  ];
  getAllAircrafts() {
    return this.aircrafts;
  }
}

Important:
@Injectable()
means:
“this class can participate in dependency injection.”

Fancy wording for:
“Nest can instantiate this for you.”

Step 7. Create GET endpoint

Open:

aircraft.controller.ts

Replace contents:

import { Controller, Get } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
@Controller('aircraft')
export class AircraftController {
  constructor(
    private readonly aircraftService: AircraftService,
  ) {}
  @Get()
  getAircrafts() {
    return this.aircraftService.getAllAircrafts();
  }
}

Important concepts here.

This:

@Controller('aircraft')

means:

/aircraft

This:

@Get()

means:

GET /aircraft

This:

constructor(private readonly aircraftService: AircraftService)

means:
Nest injects service automatically.

You never do:

new AircraftService()

Like civilized people.

Step 8. Test endpoint

Run:

npm run start:dev

Open:

http://localhost:3000/aircraft

Response:

[
  {
    "id": 1,
    "model": "Boeing 737",
    "flightNumber": "JU123",
    "altitude": 11000,
    "speed": 850
  },
  {
    "id": 2,
    "model": "Airbus A320",
    "flightNumber": "LH400",
    "altitude": 10000,
    "speed": 780
  }
]

You now understand:

* modules
* controllers
* services
* dependency injection
* routes

That’s the real foundation.

Step 9. Add POST endpoint

Now we make API mutable because humans adore turning stable systems into unpredictable systems.

Update service:

addAircraft(aircraft: any) {
  this.aircrafts.push(aircraft);
  return aircraft;
}

Full service:

import { Injectable } from '@nestjs/common';
@Injectable()
export class AircraftService {
  private aircrafts = [
    {
      id: 1,
      model: 'Boeing 737',
      flightNumber: 'JU123',
      altitude: 11000,
      speed: 850,
    },
  ];
  getAllAircrafts() {
    return this.aircrafts;
  }
  addAircraft(aircraft: any) {
    this.aircrafts.push(aircraft);
    return aircraft;
  }
}

Update controller:

import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { AircraftService } from './aircraft.service';
@Controller('aircraft')
export class AircraftController {
  constructor(
    private readonly aircraftService: AircraftService,
  ) {}
  @Get()
  getAircrafts() {
    return this.aircraftService.getAllAircrafts();
  }
  @Post()
  createAircraft(@Body() body: any) {
    return this.aircraftService.addAircraft(body);
  }
}

Step 10. Test POST

Use curl:

curl -X POST http://localhost:3000/aircraft \
-H "Content-Type: application/json" \
-d '{
  "id": 3,
  "model": "Cessna 172",
  "flightNumber": "CS100",
  "altitude": 3000,
  "speed": 220
}'

Then GET again.

You’ll see new aircraft.

At this point you understand the core Nest request flow:

HTTP Request
    ↓
Controller
    ↓
Service
    ↓
Response

That alone already puts you ahead of many people blindly copy-pasting decorators from YouTube tutorials narrated by a man whispering into a Blue Yeti microphone at 1.25x speed.

Next logical phase would be:

* DTOs
* validation
* proper typing
* route params
* in-memory IDs
* error handling

Only AFTER that:

* Prisma
* PostgreSQL
* Auth
* JWT
* Passport

That order matters. Otherwise auth becomes mystical decoration instead of something you actually understand.

Phase 2:

* PostgreSQL via Docker
* Prisma ORM
* PrismaService
* real database queries
* query params for filtering

Step 1. Start PostgreSQL

Add docker-compose.yml:

services:
  postgres:
    image: postgres:16-alpine
    container_name: aircraft-api-db
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: aircraft_db
    ports:
      - '5432:5432'

Start it:

docker-compose up -d

If using Colima instead of Docker Desktop:

colima start
docker-compose up -d

Step 2. Install Prisma

npm install prisma @prisma/client @prisma/adapter-pg pg dotenv
npm install --save-dev tsx

tsx is a TypeScript executor that handles .js → .ts import resolution automatically.
Prisma 6 generates client files that import .js paths, which ts-node cannot resolve.
tsx fixes this without extra configuration.

Step 3. Initialize Prisma

npx prisma init

This creates prisma/schema.prisma and .env.

Set DATABASE_URL in .env:

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/aircraft_db?schema=public"

Step 4. Define schema

prisma/schema.prisma:

generator client {
  provider     = "prisma-client"
  output       = "../generated/prisma"
  moduleFormat = "cjs"
}

datasource db {
  provider = "postgresql"
}

model Aircraft {
  id           Int    @id @default(autoincrement())
  model        String
  flightNumber String
  altitude     Int
  speed        Int
}

moduleFormat = "cjs" is required for NestJS. Without it, Prisma generates ESM output
which conflicts with NestJS's CommonJS module system and causes import errors at runtime.

Prisma 6 reads the database URL from prisma.config.ts, not from schema.prisma.

prisma.config.ts:

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});

Step 5. Run migration

npx prisma migrate dev --name init

Creates the Aircraft table in the database.

Step 6. Seed database

prisma/seed.ts:

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
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

The seed command is configured in prisma.config.ts under migrations.seed:

  seed: "tsx prisma/seed.ts"

tsx runs the seed file directly as TypeScript. npx prisma db seed reads this config and executes it.

Run:

npx prisma db seed

Step 7. Create PrismaService

nest generate service prisma --no-spec

src/prisma/prisma.service.ts:

import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL
    });
    super({ adapter });
  }
}

Register it in app.module.ts:

@Module({
  imports: [AircraftModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}

Or create a dedicated PrismaModule and mark it global: true.

Step 8. Load dotenv in main.ts

import 'dotenv/config' must be the first import so DATABASE_URL is available before anything else runs.

import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

Step 9. Update AircraftService

Replace hardcoded array with Prisma queries:

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Aircraft, Prisma } from 'generated/prisma/client';

@Injectable()
export class AircraftService {
  constructor(private prisma: PrismaService) {}

  async aircraft(query: Prisma.AircraftWhereUniqueInput) {
    return this.prisma.aircraft.findUnique({ where: query });
  }

  async aircrafts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AircraftWhereUniqueInput;
    where?: Prisma.AircraftWhereInput;
    orderBy?: Prisma.AircraftOrderByWithRelationInput;
  }): Promise<Aircraft[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.aircraft.findMany({ skip, take, cursor, where, orderBy });
  }

  async createAircraft(data: Prisma.AircraftCreateInput) {
    return this.prisma.aircraft.create({ data });
  }

  async updateAircraft(params: {
    where: Prisma.AircraftWhereUniqueInput;
    data: Prisma.AircraftUpdateInput;
  }) {
    const { data, where } = params;
    return this.prisma.aircraft.update({ data, where });
  }
}

Step 10. Update AircraftController

Filtering goes in query params, not the path.

GET /aircrafts          — all aircraft (paginated)
GET /aircrafts?search=Boeing&skip=0&take=10  — filtered
GET /aircrafts/:id      — single by ID

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AircraftService } from './aircraft.service';

@Controller('aircrafts')
export class AircraftController {
  constructor(private service: AircraftService) {}

  @Get()
  getAircrafts(
    @Query('search') search: string,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    return this.service.aircrafts({
      take: take ? Number(take) : 10,
      skip: skip ? Number(skip) : 0,
      where: {
        model: { contains: search, mode: 'insensitive' },
      },
    });
  }

  @Get(':id')
  getAircraft(@Param('id') id: string) {
    return this.service.aircraft({ id: Number(id) });
  }

  @Post()
  addAircraft(@Body() aircraft: any) {
    return this.service.createAircraft(aircraft);
  }
}

URL params are always strings. Number(id) converts to int before passing to Prisma.

Step 11. Test

Get all:

curl http://localhost:3000/aircrafts

Filter by model:

curl "http://localhost:3000/aircrafts?search=Boeing"

Paginate:

curl "http://localhost:3000/aircrafts?skip=0&take=3"

Get by ID:

curl http://localhost:3000/aircrafts/1

Create:

curl -X POST http://localhost:3000/aircrafts \
-H "Content-Type: application/json" \
-d '{
  "model": "Cessna 172",
  "flightNumber": "CS100",
  "altitude": 3000,
  "speed": 220
}'

You now have a real database behind a real API.

The data survives restarts.
The queries are typed.
The schema is the source of truth.

Next logical phase:

* DTOs and validation (class-validator)
* error handling (NotFoundException, filters)
* update and delete endpoints
* auth (JWT, Passport)