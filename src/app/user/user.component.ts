import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MoviesComponent, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName = '';
  isLoggedIn = false;
  favMovie = '';

  getFavoriteMovie(movie: string) {
    this.favMovie = movie;
  }

  logOut() {
    this.isLoggedIn = false;
  }

  logIn() {
    this.isLoggedIn = true;
  }
}
