import { PublicLecture, Quiz } from "../../../public/assets/images/image";

const images = [PublicLecture, Quiz];

// A deterministic alternating pattern to simulate randomization without causing Next.js hydration mismatches
const pattern = [
  0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 0,
];

export const PhotoGallery = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  photo: images[pattern[index % pattern.length]],
}));
