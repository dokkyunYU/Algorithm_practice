class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] canSpeak = {"aya", "ye", "woo", "ma"};
        for (String i : babbling) {
            for(String speaking : canSpeak) {
                if (i.contains(speaking + speaking)) break;
                i = i.replace(speaking, "-");
            }
            if (i.replace("-", "").equals("")) answer++;
        }
        return answer;
    }
}