class Solution {
    boolean solution(String s) {
        long countP = s.chars().filter(i -> ((char) i == 'p' || (char) i == 'P')).count();
        long countY = s.chars().filter(i -> ((char) i == 'y' || (char) i == 'Y')).count();
        return countP == countY ? true:false;
    }
}