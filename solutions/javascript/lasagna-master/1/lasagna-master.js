/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime){
  if(isNaN(remainingTime) || remainingTime===null){
    return 'You forgot to set the timer.';
  }
  if(remainingTime===0){
    return 'Lasagna is done.';
  }
  if(remainingTime > 0){
    return 'Not done, please wait.'
  }
}

export function preparationTime(layers,preparationTimePerLayer) {
  if(preparationTimePerLayer===null || isNaN(preparationTimePerLayer)){
    return layers.length*2;
  }else{
    return layers.length*preparationTimePerLayer;
  }
}

export function quantities(layers) {
  let noodlesCount=0;
  let sauceCount=0;
  for(let i=0;i<layers.length;i++){
    if(layers[i]==='noodles'){
      noodlesCount++;
    }
    if(layers[i]==='sauce'){
      sauceCount++;
    }
  }
  return {
    noodles:noodlesCount*50,
    sauce:sauceCount*0.2
  }
}

export function addSecretIngredient(ingredients1,ingredients2){
  ingredients2.push(ingredients1[ingredients1.length-1]);
} 

export function scaleRecipe(recipe,numberOfPortions){
 let recipeForNumberOfPortions={...recipe};
   for(let [key,value] of Object.entries(recipeForNumberOfPortions)){
    recipeForNumberOfPortions[key]=value *(numberOfPortions/2);
  }
  return recipeForNumberOfPortions
}