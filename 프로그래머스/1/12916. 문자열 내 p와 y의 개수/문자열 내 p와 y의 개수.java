class Solution {
    boolean solution(String s) {
        return s.chars().filter(i -> ((char) i == 'p' || (char) i == 'P')).count() == s.chars().filter(i -> ((char) i == 'y' || (char) i == 'Y')).count();
    }
}