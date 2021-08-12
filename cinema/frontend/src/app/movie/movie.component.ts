import { Component, OnInit } from '@angular/core'
import { MovieService } from './movie.service'
import { Movie } from './movie.entity'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  displayedColumns: string[] = ['title', 'summary', 'duration', 'rating', 'actions'];
  dataSource: Movie[] = [];
  movie: Movie = new Movie()

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.readMovies().subscribe((result) => {
      console.log(result)
      this.dataSource = result
    })
  }

  selectMovie(movie: Movie) {
    this.movie = movie
  }

  newMovie() {
    this.movie
  }

  createMovie(f: { value: Movie }) {
    this.movieService.createMovie(f.value).subscribe((result) => {
      console.log(result)
    })

  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe((result) => {
      console.log(result)
    })
  }

  updateMovie(f: { value: Movie }) {
    f.value.id = this.movie.id
    this.movieService.updateMovie(f.value).subscribe((result) => {
      console.log(result)
    })
  }
}
