import java.io.*;
import java.util.*;

public class Main {
    static StringBuilder stringbuild = new StringBuilder();
    static int[] num_arr, result_arr;
    static int N, M;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        num_arr = new int[N];
        result_arr = new int[M];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            num_arr[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(num_arr);
        permute(0);
        System.out.print(stringbuild);
    }

    private static void permute(int depth) {
        if (depth == M) {
            for (int i = 0; i < M; i++) {
                stringbuild.append(result_arr[i]).append(" ");
            }
            stringbuild.append("\n");
            return;
        }
        for (int i = 0; i < N; i++) {
            result_arr[depth] = num_arr[i];
            permute(depth + 1);
        }
    }
}
