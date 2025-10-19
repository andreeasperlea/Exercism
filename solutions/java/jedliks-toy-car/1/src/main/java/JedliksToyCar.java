public class JedliksToyCar {
    private int drivenMeters;
    private int battery=100;
    public static JedliksToyCar buy() {
        return new JedliksToyCar();
    }
    public int getDrivenMeters(){
        return this.drivenMeters;
    }

    public int getBattery(){
        return this.battery;
    }

    public void setDrivenMeters(int drivenMeters){
        this.drivenMeters=drivenMeters;
    }


    public String distanceDisplay() {
       return "Driven "+getDrivenMeters()+ " meters"; 
    }

    public String batteryDisplay() {
        int percentagesOfBatteryConsumed=getDrivenMeters()/20;
        int remainingBattery=getBattery()-percentagesOfBatteryConsumed;
        if(remainingBattery>0){
            return "Battery at "+remainingBattery+"%";
        }else{
            return "Battery empty";
        }
    }

    public void drive() {
        int percentagesOfBatteryConsumed = getDrivenMeters() / 20;
    int remainingBattery = getBattery() - percentagesOfBatteryConsumed;

    if (remainingBattery > 0) {
        setDrivenMeters(this.drivenMeters + 20);
    }
    }
}
