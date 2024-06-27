export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  // subregion: string;
  // population: number;
  flags: {
    svg: string;
    png: string;
  };
}
