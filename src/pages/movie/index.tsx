/* eslint-disable react-hooks/rules-of-hooks */
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./query";
import { useQuery } from "@tanstack/react-query";
import { Bookmark, Calendar, Share2, Timer } from "lucide-react";

export const MoviePage = () => {
  const { id } = useParams<string>();

  if (!id) {
    return <div>Movie not found</div>;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error loading movie</div>;
  }

  return (
    <div className="h-screen bg-slate-900 overflow-y-hidden ">
      <div className="h-screen bg-white relative ">
        <div className="w-full h-full bg-red-600 relative">
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="absolute bottom-0 left-0 w-3/4 ml-10 mb-10 flex p-4 ">
          <div className="flex-shrink-0 mr-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="hero"
              className="w-[400px] h-[500px] object-cover rounded-md"
            />
          </div>
          <div className="text-start flex flex-col justify-center w-3/4">
            <div className="flex space-x-5 py-4 ">
              <Bookmark size={24} color="gray" />
              <Share2 size={24} color="gray" />
            </div>
           
            <div className="text-4xl font-semibold  text-white font-urbanist">
              {data.title}
            </div>
            <div className="text-sm  text-slate-400 font-urbanist">
              {data.tagline}
            </div>
            <div className="text-sm  text-slate-400 font-urbanist my-2">
              <div className="flex">
                <div className="flex space-x-4 items-center mr-5 ">
                  <Calendar size={24} color="gray" className="mr-3" />
                  {data.release_date}
                </div>

                <div className="flex space-x-4 items-center ">
                  <Timer size={24} color="gray" className="mr-3" />
                  {data.runtime} min
                </div>
              </div>
            </div>
            <div className="text-lg  mt-4 mb-2 font-bold text-white font-urbanist">
              Summary
            </div>
            <div className="text-sm  text-slate-400  font-urbanist">
              {data.overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
