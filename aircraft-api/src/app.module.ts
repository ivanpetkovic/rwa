import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AircraftModule } from './aircraft/aircraft.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AircraftModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
