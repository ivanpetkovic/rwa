export interface Airport {
  id: string;
  name: string;
  x: number; // pixel X on the 1000px-wide map
  y: number; // pixel Y (scaled to keep aspect ratio)
}