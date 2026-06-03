import { Module } from '@nestjs/common';
import { AircraftController } from './aircraft.controller';
import { AircraftService } from './aircraft.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AircraftController],
  providers: [AircraftService, PrismaService]
})
export class AircraftModule {}
