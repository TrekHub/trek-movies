export interface MoviePosterData {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

export enum MovieType {
  Popular = "popular",
  Upcoming = "upcoming",
}
