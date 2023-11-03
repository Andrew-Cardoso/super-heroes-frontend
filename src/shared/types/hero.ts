import { Thumbnail } from "./thumbnail";

export interface Hero {
  heroId: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}
