//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const dnaArr=dna.split("");
for(let i=0;i<dnaArr.length;i++){
    switch(dnaArr[i]){
      case "G":
        dnaArr[i]="C";
        break;
      case "C":
        dnaArr[i]="G";
        break;
      case "T":
        dnaArr[i]="A";
        break;
      case "A":
        dnaArr[i]="U";
        break;
    }
  }
  return dnaArr.join("");
};
