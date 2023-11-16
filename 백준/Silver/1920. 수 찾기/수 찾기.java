import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.util.Arrays;
class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader sc = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(sc.readLine());
        int n = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(sc.readLine());
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(arr);
        st = new StringTokenizer(sc.readLine());
        int m = Integer.parseInt(st.nextToken());
        st = new StringTokenizer(sc.readLine());
        for (int i = 0; i < m; i++) {
            int target = Integer.parseInt(st.nextToken());
            int left = 0;
            int right = n - 1;
            boolean isExist = false;
            while (left <= right) {
                int mid = (left + right) / 2;
                if (arr[mid] == target) {
                    isExist = true;
                    break;
                }
                else if (arr[mid] > target)
                    right = mid - 1;
                else
                    left = mid + 1;
            }
            System.out.println(isExist ? "1" : "0");
        }
    }
}