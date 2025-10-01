import bike from "../assets/bike_oil.jpg"
import cng from "../assets/cng_oil.jpg"
import car from "../assets/car_oil.jpg"
import truck from "../assets/truck_oil.jpg"
import channel_partner from "../assets/background_image_1.jpg"
export interface HeroSlide {
  id: number;
  vehicle?: string;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: channel_partner,
    title: 'Channel Partner of GS Caltex',
    description: 'Official dealership providing premium Korean lubricant technology with global quality standards',
    buttonText: 'Learn More',
    buttonLink: '/about'
  },
  
  
];