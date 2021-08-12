import { Repository, UpdateResult, DeleteResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Movie } from './movie.entity'
import { Injectable } from '@nestjs/common'

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie)
        private movieRepository: Repository<Movie>
    ) { }

    async create(movie: Movie): Promise<Movie> {
        return await this.movieRepository.save(movie)
    }

    async readOne(movie: Movie): Promise<Movie[]> {
        return await this.movieRepository.find(movie)
    }

    async readAll(): Promise<Movie[]> {
        return await this.movieRepository.find()
    }

    async update(movie: Movie): Promise<UpdateResult> {

        return await this.movieRepository.update(movie.id, movie)
    }

    async delete(id): Promise<DeleteResult> {
        return await this.movieRepository.delete(id)
    }

}
