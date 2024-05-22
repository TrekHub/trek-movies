import { MoviePosterData } from "../typings/typings";

interface MovieColumnProps {
  data: MoviePosterData[];
  displayType: "popular" | "upcoming";
}

export const MovieColumn = (props: MovieColumnProps) => {
  return (
    <div className="movie-column">
      <h2>{props.data[0].title}</h2>
      {/* <ul>
        {props.data.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Release Date: {movie.release_date}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
