public class LogLevels {
    
    public static String message(String logLine) {
        String[] parts=logLine.split(":",2);
        return parts[1].trim();
    }

    public static String logLevel(String logLine) {
        String[] parts=logLine.split(":",2);
        return parts[0].replace("[","").replace("]","").toLowerCase();
    }

    public static String reformat(String logLine) {
        String[] parts=logLine.split(":",2);
        String logLevel=parts[0].replace("[","(").replace("]",")").toLowerCase();
        return parts[1].trim()+" "+logLevel;
    }
}
