"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import BlurCircle from "../../shared/BlurCircle";
import { useRouter } from "next/navigation";
import MovieCard from "@/components/MovieCard";
import { useAppContext } from "@/context/AppContext";
import { dummyShowsData } from "@/data";

const FeaturedSection = () => {
  const router = useRouter();
  const { shows } = useAppContext();

  // Use dummy data if shows is empty
  const displayShows = shows && shows.length > 0 ? shows : dummyShowsData;

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button
          onClick={() => router.push("/movies")}
          className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
        >
          View All
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
        </button>
      </div>

      {displayShows.length > 0 ? (
        <div className="flex flex-wrap justify-center max-sm:justify-center gap-8 mt-8">
          {displayShows.slice(0, 4).map((show) => (
            <MovieCard key={show._id} movie={show} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-10">
          No movies are currently showing.
        </p>
      )}

      {displayShows.length > 0 && (
        <div className="flex justify-center mt-20">
          <button
            onClick={() => {
              router.push("/movies");
              scrollTo(0, 0);
            }}
            className="px-10 py-2 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedSection;
