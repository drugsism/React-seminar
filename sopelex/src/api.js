import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0bcb1fec74dc65cd74a4324b8a05f003",
    language: "ko-KR"
  }
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        appenf_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        appenf_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
