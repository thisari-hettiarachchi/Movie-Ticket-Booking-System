"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { dummyShowsData } from "@/data";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(null);
  // const {
  //   shows,
  //   axios,
  //   getToken,
  //   user,
  //   fetchFavouriteMovies,
  //   favoriteMovies,
  //   image_base_url,
  // } = useAppContext();

  // const getShow = async () => {
  //   try {
  //     const { data } = await axios.get(`/api/show/${id}`);
  //     if (data.success) {
  //       setShow(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getShow();
  // }, [id]);

  // useEffect(() => {
  //   const foundMovie = shows?.find((show) => show._id === id);
  //   setMovie(foundMovie);
  // }, [id]);

  const { image_base_url } = useAppContext();
  const shows = dummyShowsData;

  const resolveImageSrc = (src) => {
    if (!src) return "";
    return src.startsWith("http")
      ? src
      : image_base_url
        ? image_base_url + src
        : src;
  };

  const getShow = () => {
    const found = shows?.find((s) => s._id === id);
    setShow(found || null);
  };

  useEffect(() => {
    getShow();
  }, [id]);

  useEffect(() => {
    const foundMovie = shows?.find((s) => s._id === id);
    setMovie(foundMovie || null);
  }, [id]);

  return (
    <div className="px-6 md:px-16 lg:px-40 pt-10 md:pt-32">
      <p className="text-lg font-medium mt-5">Your Favorite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">
          {(show?.casts || []).slice(0, 12).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={resolveImageSrc(cast.profile_path)}
                alt={cast.name || "Profile Image"}
                width={90}
                height={90}
                className="rounded-full aspect-square object-cover"
              />
              <p className="font-medium text-xs mt-3">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
