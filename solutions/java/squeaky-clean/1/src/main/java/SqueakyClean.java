class SqueakyClean {
    static String clean(String identifier) {
        StringBuilder result = new StringBuilder();
        boolean capitalizeNext = false;

        for (char c : identifier.toCharArray()) {
            switch (c) {
                case ' ':
                    result.append('_');
                    break;
                case '4':
                    result.append('a');
                    break;
                case '3':
                    result.append('e');
                    break;
                case '0':
                    result.append('o');
                    break;
                case '1':
                    result.append('l');
                    break;
                case '7':
                    result.append('t');
                    break;
                case '-':
                    capitalizeNext = true;
                    break;
                default:
                    if (Character.isLetter(c)) {
                        if (capitalizeNext) {
                            result.append(Character.toUpperCase(c));
                            capitalizeNext = false;
                        } else {
                            result.append(c);
                        }
                    }
            }
        }

        return result.toString();
    }
}
