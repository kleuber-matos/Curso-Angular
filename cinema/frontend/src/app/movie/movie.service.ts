import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Movie } from './movie.entity'
import { Environment } from '../enviroment'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  public readMovies() {
    return this.httpClient.get<Movie[]>(`${Environment.apiUrl}/movie`)
  }

  public createMovie(movie: Movie) {
    return this.httpClient.post<Movie>(`${Environment.apiUrl}/movie`, movie)
  }

  public updateMovie(movie: Movie) {
    return this.httpClient.put<Movie>(`${Environment.apiUrl}/movie/${movie.id}`, movie)
  }

  public deleteMovie(id: number) {
    return this.httpClient.delete(`${Environment.apiUrl}/movie/${id}`)
  }
}
