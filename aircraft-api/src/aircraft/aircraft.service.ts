import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Aircraft, Prisma } from 'generated/prisma/client';

@Injectable()
export class AircraftService {

  constructor(private prisma: PrismaService) {

  }


  async aircraft(query: Prisma.AircraftWhereUniqueInput) {
    return this.prisma.aircraft.findUnique({
      where: query
    });
  }

  async aircrafts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AircraftWhereUniqueInput;
    where?: Prisma.AircraftWhereInput;
    orderBy?: Prisma.AircraftOrderByWithRelationInput;
  }): Promise<Aircraft[]>{
    const {skip, take, cursor, where, orderBy} = params;
    return this.prisma.aircraft.findMany({
      skip,
      take, 
      cursor,
      where, 
      orderBy
    });
  }  
  
  async createAircraft(data: Prisma.AircraftCreateInput) {
    return this.prisma.aircraft.create({ data});
  }

  async updateAircraft(params: {
    where: Prisma.AircraftWhereUniqueInput,
    data: Prisma.AircraftUpdateInput
  }) {
    const {data, where} = params;
    return this.prisma.aircraft.update({data, where});
  }
}
