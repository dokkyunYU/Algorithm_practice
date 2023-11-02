import java.util.stream.Collectors;
class Solution {
    public String solution(String s, int n) {
        int nx = n % (int) ('z' - 'a' + 1);
        return s.chars().mapToObj(i -> {
            int result = i + nx;
            if (i == ' ')
                result = i;
            else if (i >= 'a' && i <= 'z') {
                if (i + nx > (int) 'z')
                    result = 'a' + (i + nx - 'z') - 1;
                else
                    result = i + nx;
            }
            else if (i >= 'A' && i <= 'Z') {
                if (i + nx > (int) 'Z')
                    result = 'A' + (i + nx - 'Z') - 1;
                else
                    result = i + nx;
            }
            return String.valueOf((char) result);
        }).collect(Collectors.joining());
    }
}