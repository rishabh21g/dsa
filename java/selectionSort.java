
import java.util.Arrays;

public class selectionSort {

    public static int[] sSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j <= n - 1; j++) {
                if (arr[j] < arr[i]) {
                    minIdx = j;

                }
            }
            if (minIdx != i) {
                int temp = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = temp;
            }
        }

        return arr;

    }

    ;
    public static void main(String[] args) {
        int arr[] = {2, 14, 8, 4, 74, 25};
        int[] result = sSort(arr);
        System.out.println("Sorted Array" + Arrays.toString(result));
    }
}
