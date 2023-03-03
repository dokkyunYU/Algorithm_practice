import java.io.*;
import java.util.*;

public class Main {
    private static int[] fibo_num = new int[21];
    public static void main(String[] args) throws IOException {
        fibo_num[1] = 1;
        BufferedReader bff = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bff.readLine());
        int loc = Integer.parseInt(st.nextToken());
        System.out.println(fibonacci(loc));
        return;
    }

    private static int fibonacci(int loc) throws IndexOutOfBoundsException {
        for (int i = 2; i <= loc; i++) {
            fibo_num[i] = fibo_num[i-1] + fibo_num[i-2];
        }
        return fibo_num[loc];
    }
}