import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AircraftService } from './aircraft.service';
import type { Aircraft } from './aircraft.model';

@Controller('aircrafts')
export class AircraftController {
    constructor(private service: AircraftService) {

    }

    @Get()
    getAircrafts(@Query('search') search: string, @Query('skip') skip?: string, @Query('take') take?: string) {
        return this.service.aircrafts({
            take: take ? Number(take) : 10,
            skip: skip ? Number(skip) : 0, 
            where: {
               model: { contains: search, mode: 'insensitive'} 
            }
        });
    }

    @Get(":id")
    getAircraft(@Param('id') id: string) {
        return this.service.aircraft({ id: Number(id)});
    }

    // @Roles
    @Post()
    addAircraft(@Body() aircraft: Aircraft) {
        return this.service.createAircraft(aircraft);
    }
}

