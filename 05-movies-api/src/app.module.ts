import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie/movie.entity';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    ActorModule,
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'movies',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [Movie],
      synchronize: true,
    }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
