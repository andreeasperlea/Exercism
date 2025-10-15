public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        double totalCars=0;
        if(speed>=1 && speed<=4){
            totalCars= 221*speed;
        }else if(speed>=5 && speed <= 8){
            totalCars=((speed*221)*0.9);
        }else if(speed==9){
            totalCars= ((speed*221)*0.8);
        }else if(speed==10){
            totalCars=((speed*221)*0.77);
        }
        return totalCars;
    }

    public int workingItemsPerMinute(int speed) {
        double carsPerMinute=productionRatePerHour(speed)/60;
        return (int) carsPerMinute;
    }
}
