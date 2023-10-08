import java.util.HashSet;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        String s = "My name is Raghav Gupta";
        System.out.println("Is pangram: " + isPangram(s));
    }

    public static boolean isPangram(String s) {
        Set<Character> alphabetSet = new HashSet<>();
        for (char c : s.toCharArray()) {
            if (Character.isLetter(c)) {
                alphabetSet.add(Character.toLowerCase(c));
            }
        }
        return alphabetSet.size() == 26;
    }
}
