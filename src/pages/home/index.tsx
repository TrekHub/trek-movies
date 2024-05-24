import { useQuery } from "@tanstack/react-query";
import bannerImg from "../../assets/images/banner.jpg";
import { MovieColumn } from "../../components/MovieColumn";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "./query";
import { MovieType } from "../../typings/typings";

export const HomePage = () => {
  const {
    data: upcomingMovieData,
    isLoading: isLoadingUpcomingMovies,
    isError: isErrorUpcomingMovies,
  } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: fetchUpcomingMovies,
  });

  const {
    data: popularMovieData,
    isLoading: isLoadingPopularMovies,
    isError: isErrorPopularMovies,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  const {
    data: topRatedMovieData,
    isLoading: isLoadingTopRatedMovies,
    isError: isErrorTopRatedMovies,
  } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex flex-col h-full w-full">
        <div className="h-[400px] w-full bg-red-600">
          <img
            src={bannerImg}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="">
            {isLoadingUpcomingMovies && <div>Loading...</div>}
            {isErrorUpcomingMovies && <div>Error loading upcoming movies</div>}
            {!isLoadingUpcomingMovies && upcomingMovieData && (
              <MovieColumn
                data={upcomingMovieData.results}
                displayType={MovieType.Upcoming}
              />
            )}

            {isLoadingPopularMovies && <div>Loading...</div>}
            {isErrorPopularMovies && <div>Error loading popular movies</div>}
            {!isLoadingPopularMovies && popularMovieData && (
              <MovieColumn
                data={popularMovieData.results}
                displayType={MovieType.Popular}
              />
            )}

            {isLoadingTopRatedMovies && <div>Loading...</div>}
            {isErrorTopRatedMovies && <div>Error loading top rated movies</div>}
            {!isLoadingTopRatedMovies && topRatedMovieData && (
              <MovieColumn
                data={topRatedMovieData.results}
                displayType={MovieType.topRated}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
