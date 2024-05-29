import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private service: MovieService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() movieDto: MovieDto) {
    return this.service.create(movieDto);
  }
}
