"use client";
import React, { useEffect } from "react";
import { Film, Ticket } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const Loading = () => {

  const router = useRouter();
  const params = useParams();
  const nextUrl = params?.nextUrl;

  useEffect(() => {
    if (nextUrl) {
      setTimeout(() => {
        // If nextUrl is an array (catch-all param), join it
        if (Array.isArray(nextUrl)) {
          router.push("/" + nextUrl.join("/"));
        } else {
          router.push("/" + nextUrl);
        }
      }, 8000);
    }
  }, [nextUrl, router]);
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Animated film reel - centered */}
        <div className="relative mb-8 flex justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center animate-spin">
            <Film className="w-8 h-8 text-white" />
          </div>
        </div>
        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Loading</h2>
          <p className="text-gray-400">
            Please wait while we prepare your experience
          </p>
        </div>
        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-red-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-red-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
        {/* Ticket icon */}
        <div className="mt-8 opacity-30">
          <Ticket className="w-12 h-12 text-white mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
