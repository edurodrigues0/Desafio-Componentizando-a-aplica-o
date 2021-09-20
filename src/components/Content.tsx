import { MovieCard } from './MovieCard';

import '../styles/content.scss';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  CategoryTitle: string;
  Movies: MovieProps[]
}

export function Content({ Movies, CategoryTitle }: ContentProps) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span>{CategoryTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {Movies.map(movie => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}