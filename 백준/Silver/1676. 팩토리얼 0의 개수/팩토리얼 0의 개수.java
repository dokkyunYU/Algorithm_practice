import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.util.StringTokenizer;
class Main {
    public static void main(String[] args) throws Exception {
        new Main().Solution();
    }
    public int Solution() throws Exception {
        BufferedReader sc = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(sc.readLine());
        int num = Integer.parseInt(st.nextToken());
        int count2 = 0;
        int count5 = 0;
        int answer = 0;
        for (int n = 1; n <= num; n++) {
            for (int i = n; i % 2 == 0; i /= 2) {
                count2++;
            }
            for (int i = n; i % 5 == 0; i /= 5) {
                count5++;
            }
            int tmp = Math.min(count2, count5);
            count2 -= tmp;
            count5 -= tmp;
            answer += tmp;
        }
        System.out.println(answer);
        return answer;
    }
}