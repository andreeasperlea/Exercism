//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet,ageInSeconds) => {
  switch(planet){
    case 'mercury':
      return Number((ageInSeconds / seconds(0.2408467)).toFixed(2));
    case 'venus':
      return Number((ageInSeconds / seconds(0.61519726)).toFixed(2));
    case 'earth':
      return Number((ageInSeconds / seconds(1.0)).toFixed(2));
    case 'mars':
      return Number((ageInSeconds / seconds(1.8808158)).toFixed(2));
    case 'jupiter':
      return Number((ageInSeconds / seconds(11.862615)).toFixed(2));
    case 'saturn':
      return Number((ageInSeconds / seconds(29.447498)).toFixed(2));
    case 'uranus':
      return Number((ageInSeconds / seconds(84.016846)).toFixed(2));
    case 'neptune':
      return Number((ageInSeconds / seconds(164.79132)).toFixed(2));
    default:
      throw new Error( "not a planet");
      break;
  }
};

const seconds = (years)=>{
  return years*365.25*86400;
}
