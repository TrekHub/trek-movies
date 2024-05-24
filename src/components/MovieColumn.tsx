import { MoviePosterData, MovieType } from "../typings/typings";

interface MovieColumnProps {
  data: MoviePosterData[];
  displayType: MovieType;
}

export const MovieColumn = (props: MovieColumnProps) => {
  return (
    <div className="movie-column">
      <ul className="container flex flex-col mx-auto justify-start ">
        <div className="text-pink-600 font-bold text-xl font-urbanist text-start mb-8 ">
         {`${props.displayType} Movies`} 
        </div>
        <div className="overflow-x-auto">
          <div className="flex text-left space-x-4 w-full">
            {props.data.map((movie) => (
              <li key={movie.id} className="min-w-[200px]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h3 className="mt-2 text-lg  text-white font-semibold">
                  {movie.title}
                </h3>

                <p className="text-gray-600">
                  Release Date: {movie.release_date}
                </p>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};
