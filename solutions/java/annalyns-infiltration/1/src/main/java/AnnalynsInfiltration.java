class AnnalynsInfiltration {
    public static boolean canFastAttack(boolean knightIsAwake) {
       return knightIsAwake ? false : true;
    }

    public static boolean canSpy(boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake) {
       return knightIsAwake || archerIsAwake || prisonerIsAwake ?  true:false;
    }

    public static boolean canSignalPrisoner(boolean archerIsAwake, boolean prisonerIsAwake) {
        return prisonerIsAwake && !archerIsAwake ? true : false;
    }

    public static boolean canFreePrisoner(boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake, boolean petDogIsPresent) {
      if(petDogIsPresent){
          return !archerIsAwake ? true : false;
      }else{
          return prisonerIsAwake && !archerIsAwake && !knightIsAwake ? true : false;
      }
    }
}
