import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import RelatedThumbnail from "./RelatedThumbnail";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { API_BASE_URL, ENDPOINTS } from "../constants/Constants";

// const DetailPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const eid = searchParams.get("egid");

//   const { isError, isLoading, data } = useQuery({
//     queryKey: ["detailnews"],
//     queryFn: async () => {
//       const response = await API_BASE_URL.get(
//         `${ENDPOINTS.SPECIFIC_NEWS}${eid}`
//       );
//       return response.data;
//     },
//   });

//   // Getting all related projects
//   const {
//     isError: isRelatedError,
//     isLoading: isRelatedLoading,
//     data: isRelatedData,
//   } = useQuery({
//     queryKey: ["relatednews"],
//     queryFn: async () => {
//       const response = await API_BASE_URL.get(`${ENDPOINTS.GET_NEWS}`);
//       return response.data;
//     },
//   });

//   // getting only the related news to the current news where their id do match
//   const relatedNews = isRelatedData?.filter(
//     (project) =>
//       project?.category === data?.category && project?.id !== data?.id
//   );

//   return (
//     <>
//       {isError ? (
//         "Error Loading the page"
//       ) : isLoading ? (
//         "loading...."
//       ) : (
//         <section className="px-10">
//           {/* TOP NAVIGATION */}
//           <div className="text-lg breadcrumbs mb-5 sticky top-0 left-0 right-0 h-12 bg-base-100">
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/news">News</Link>
//               </li>
//             </ul>
//           </div>
//           {/* news content */}
//           <div className="grid gap-6 md:grid-cols-2">
//             <div className="">
//               <aside className="">
//                 <img
//                   className="rounded-xl w-full h-96 object-cover object-left-top"
//                   src="http://localhost:5173/src/assets/img-2.jpg"
//                   alt={data.title}
//                 />

//                 {/* arrow left */}
//                 {/* <div className="arrows">
//                 <FaChevronLeft className="global-icon" />
//                 <FaChevronRight className="global-icon" />
//               </div> */}
//               </aside>

//               {/* details  */}
//               <aside className="">
//                 <div className="text-lg capitalize font-bold">
//                   category -{" "}
//                   <span className="badge badge-primary">{data.category}</span>
//                 </div>
//                 <div className="mb-10">
//                   Time: {moment(data.created_date).format("MMMM D YYYY")} @
//                   {moment(data.created_date).fromNow()}
//                 </div>

//                 {/* title */}
//                 <div className="text-lg">
//                   <span className="font-semibold">Title</span>: <br />
//                   {data.title}
//                 </div>
//                 <br />

//                 {/* description */}
//                 <div className="text-lg ">
//                   <span className="font-semibold">Description</span>: <br />
//                   {data.description}
//                 </div>
//               </aside>
//             </div>

//             <aside className="related-news">
//               <h3>Related news</h3>

//               <RelatedThumbnail
//                 isRelatedError={isRelatedError}
//                 isRelatedLoading={isRelatedLoading}
//                 relatedNews={relatedNews}
//               />
//             </aside>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

//

// interface MovieDetails {
// title: string;
// rating: number;
// releaseDate: string;
// duration: string;
// genre: string[];
// synopsis: string;
// director: string;
// cast: string[];
// }

// detail page

const DetailPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const movieDetails = {
    title: "The Last Horizon",
    rating: 4.8,
    releaseDate: "2025-05-15",
    duration: "2h 35min",
    genre: ["Science Fiction", "Adventure", "Drama"],
    synopsis:
      "In the year 2150, humanity faces its greatest challenge as Earth's resources dwindle and climate change reaches a critical point. Dr. Sarah Chen, a brilliant quantum physicist, discovers a way to harness energy from parallel universes. But as she delves deeper into her groundbreaking research, she uncovers a conspiracy that threatens not just our world, but countless others. With time running out and powerful forces working against her, Sarah must decide whether to protect her discovery or share it with the world, knowing either choice could lead to catastrophic consequences.",
    director: "Christopher Anderson",
    cast: [
      "Emma Stone",
      "Michael B. Jordan",
      "Cillian Murphy",
      "Zendaya",
      "Oscar Isaac",
    ],
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* TOP NAVIGATION */}
      <header className="text-lg breadcrumbs mb-5 sticky top-0 left-0 right-0 h-12 z-[100]">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute bottom-0 left-0 right-0 p-8 mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-64 h-96 rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
              <img
                src="../src/assets/person 2.jpg"
                alt="Movie Poster"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                {movieDetails.title}
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-1"></i>
                  {movieDetails.rating}
                </span>
                <span>{movieDetails.duration}</span>
                <span>{movieDetails.releaseDate}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {movieDetails.genre.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg flex items-center gap-2 !rounded-button whitespace-nowrap"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <i
                    className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}
                  ></i>
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg flex items-center gap-2 !rounded-button whitespace-nowrap">
                  <i className="fas fa-plus"></i>
                  Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex gap-8 border-b border-gray-800 mb-8">
          {["overview", "cast", "reviews", "related"].map((tab) => (
            <button
              key={tab}
              className={`pb-4 px-2 capitalize ${
                activeTab === tab
                  ? "text-white border-b-2 border-red-600"
                  : "text-gray-400 hover:text-white"
              } !rounded-button whitespace-nowrap`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Synopsis */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">
                {showFullSynopsis
                  ? movieDetails.synopsis
                  : `${movieDetails.synopsis.slice(0, 200)}...`}
                <button
                  onClick={() => setShowFullSynopsis(!showFullSynopsis)}
                  className="text-red-500 hover:text-red-400 ml-2 !rounded-button whitespace-nowrap"
                >
                  {showFullSynopsis ? "Show Less" : "Read More"}
                </button>
              </p>
            </div>
            {/* Cast */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Cast</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movieDetails.cast.map((actor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden">
                      <img
                        src={`https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20$%7Bactor%7D%2C%20neutral%20background%2C%20high%20quality%20photography&width=48&height=48&seq=${
                          index + 4
                        }&orientation=squarish`}
                        alt={actor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm">{actor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Director</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20movie%20director%2C%20neutral%20background%2C%20high%20quality%20photography&width=48&height=48&seq=9&orientation=squarish"
                    alt={movieDetails.director}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{movieDetails.director}</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Rate this movie</h3>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setCurrentRating(star)}
                    className="text-2xl !rounded-button whitespace-nowrap"
                  >
                    <i
                      className={`fas fa-star ${
                        star <= currentRating
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                    ></i>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
