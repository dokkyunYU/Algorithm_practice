class Solution {
    public String solution(String s) {
        StringBuilder answer = new StringBuilder();
        boolean isUpper = true;
        for (String i : s.split("")) {
            answer.append(isUpper ? i.toUpperCase() : i.toLowerCase());
            isUpper = i.equals(" ") ? true : !isUpper;
        }
        return answer.toString();
    }
}