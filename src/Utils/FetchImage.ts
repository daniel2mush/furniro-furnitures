import image from '../Assets/Hero.png'

export const getImageUrl = (path:string) => {
  return new URL(`../Assets/${path}`, import.meta.url).href;
};
