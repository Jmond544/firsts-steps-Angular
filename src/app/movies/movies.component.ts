import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  @Input() userName = "";
  @Output() addFavoriteEvent = new EventEmitter<string>();
  movies = [
    { id: 1, name: 'The Shawshank Redemption' },
    { id: 2, name: 'The Godfather' },
    { id: 3, name: 'The Dark Knight' },
    { id: 4, name: 'The Lord of the Rings: The Return of the King' },
    { id: 5, name: 'Pulp Fiction' },
    { id: 6, name: 'Schindler\'s List' },
    { id: 7, name: 'The Good, the Bad and the Ugly' },
    { id: 8, name: 'Fight Club' },
    { id: 9, name: 'Forrest Gump' },
    { id: 10, name: 'Inception' }
  ];
  fav (movie: string) {
    this.addFavoriteEvent.emit(movie);
  }
}
