import { useQuery } from "@tanstack/react-query";
import bannerImg from "../../assets/images/banner.jpg";
import { MovieColumn } from "../../components/MovieColumn";
import { fetchUpcomingMovies } from "./query";

export const HomePage = () => {
  const {
    data: upcomingMovieData,
    isLoading: isLoadingUpcomingMovies,
    isError: isErrorUpcomingMovies,
  } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: fetchUpcomingMovies,
  });
  return (
    <div className="h-screen bg-slate-900">
      <div className="flex flex-col h-full w-full">
        <div className="h-[600px] w-full bg-red-600">
          <img
            src={bannerImg}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 ">
          <div className="text-pink-600 font-bold text-xl font-urbanist text-start">
            Upcoming Movies
          </div>
          <div className="mt-10">
            {isLoadingUpcomingMovies && <div>Loading...</div>}
            {isErrorUpcomingMovies && <div>Error loading upcoming movies</div>}
            {!isLoadingUpcomingMovies && upcomingMovieData && (
              <MovieColumn
                data={upcomingMovieData.results}
                displayType="upcoming"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
