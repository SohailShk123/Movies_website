

export const api = [
  {
    name: "fetchTrending",
    title: "Trending",
    url: `/movie/now_playing?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}`,
    
  },
  {
    name: "fetchTopRated",
    title: "TopRated",
    url: `/movie/top_rated?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&language=en-US`,
  },
  {
    name: "fetchActionMovies",
    title: "Action",
    url: `/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&with_genres=28`,
  },
  {
    name: "fetchComedyMovies",
    title: "Comedy",
    url: `/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&with_genres=36`,
  },
  {
    name: "fetchHorrorMovies",
    title: "Horror",
    url: `/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&with_genres=27 `,
  },
  {
    name: "fetchRomanceMovies",
    title: "Romance",
    url: `/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&with_genres=10749`,
  },
  {
    name: "fetchSciFiMovies",
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&with_genres=28`,
  },
  {
    name: "fetchWestern",
    title: "Western",
    url: `/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&with_genres=37`,
  },
  {
    name: "fetchAnimation",
    title: "Animation",
    url: `/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&with_genres=16`,
  },
  {
    name: "fetchTV",
    title: "TV Movies",
    url: `/discover/movie?api_key=${import.meta.env.VITE_REACT_APP_API_KEY}&with_genres=10770`,
  },
];
