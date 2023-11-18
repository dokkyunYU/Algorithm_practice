class Solution {
    public int solution(String t, String p) {
        int plen = p.length();
        int tlen = t.length();
        int answer = 0;
        for (int i = 0; i < tlen - plen + 1; i++) {
            int cnt = 0;
            for (int j = 0; j < plen; j++) {
                int tnum = (int) t.charAt(i + j) - '0';
                int pnum = (int) p.charAt(j) - '0';
                if (tnum > pnum) {
                    break;
                } else if (tnum < pnum) {
                    answer++;
                    break;
                } else {
                    cnt++;
                }
            }
            if (cnt == plen)
                answer++;
        }
        return answer;
    }
}