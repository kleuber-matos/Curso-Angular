import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { MovieService } from './movie.service'
import { Movie } from './movie.entity'

@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {
    }

    @Get(':id')
    async readOne(@Param('id') id, @Body() movie: Movie): Promise<any> {
        movie.id = Number(id)
        return this.movieService.readOne(movie)
    }

    @Get()
    readAll(): Promise<Movie[]> {
        return this.movieService.readAll()
    }

    @Post()
    async create(@Body() movie: Movie): Promise<any> {
        return this.movieService.create(movie)
    }

    @Put(':id')
    async update(@Param('id') id, @Body() movie: Movie): Promise<any> {
        movie.id = Number(id)
        return this.movieService.update(movie)
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.movieService.delete(id)
    }
}
