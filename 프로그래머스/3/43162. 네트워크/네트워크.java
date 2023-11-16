class Solution {
    public int solution(int n, int[][] computers) {
        int answer = 0;
        for (int i = 0; i < n; i++) {
            if (computers[i][i] != 2)
                answer += dfs(computers,n,i);
        }
        return answer;
    }
    public int dfs(int[][] computers, int n, int idx) {
        computers[idx][idx] = 2;
        for (int i = 0; i < n; i++) {
            if (computers[idx][i] == 1 && computers[i][i] != 2) {
                computers[idx][i] = 2;
                computers[i][idx] = 2;
                dfs(computers, n, i);
            }
        }
        return 1;
    }
}