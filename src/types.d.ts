export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy";
export type Visibility = "good" | "average" | "poor" | "ok";

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
