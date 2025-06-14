
public class recursion {

    public static int numSum(int N) {
        if (N == 0) {
            return 0;
        }
        return N + numSum(N - 1);
    }

    public static int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * factorial(n - 1);

    }

    public static void main(String[] args) {
        int result = factorial(8);
        System.err.println(result);
    }
}
