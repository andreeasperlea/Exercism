class NeedForSpeed {
    private final int speed;
    private final int batteryDrain;
    private int battery=100;
    private  int distanceDriven=0;
    NeedForSpeed(int speed, int batteryDrain) {
        this.speed=speed;
        this.batteryDrain=batteryDrain;
    }
    public int getSpeed(){
        return this.speed;
    }
    public int getBatteryDrain(){
        return this.batteryDrain;
    }
    public int getBattery(){
        return this.battery;
    }

    public int getDistanceDriven(){
        return this.distanceDriven;
    }

    public void setDistanceDriven(int distanceDriven){
        this.distanceDriven=distanceDriven;
    }

    public void setBattery(int battery){
        this.battery=battery;
    }
    public boolean batteryDrained() {
        if(getBattery()<=0 || getBattery()-getBatteryDrain()<0 ){
            return true;
        }
        return false;
    }

    public int distanceDriven() {
       return getDistanceDriven();
    }

    public void drive() {
       if(!batteryDrained() ){
        setDistanceDriven(getDistanceDriven()+getSpeed());
        setBattery(getBattery()-getBatteryDrain());
       }
    }
    public static NeedForSpeed nitro() {
       return new NeedForSpeed(50,4);
    }
}

class RaceTrack {
    private int distance;
    RaceTrack(int distance) {
        this.distance=distance;
    }
    public int getDistance(){
        return this.distance;
    }

    public boolean canFinishRace(NeedForSpeed car) {
        if(((car.getBattery()/car.getBatteryDrain())*car.getSpeed())>=getDistance()){
            return true;
        }
        return false;
    }
}
