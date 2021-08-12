import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Movie } from './movie/movie.entity'
import { MovieService } from './movie/movie.service'
import { MovieController } from './movie/movie.controller'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Movie])
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule { }
