import  java.util.*;
public class loop{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value you want to loop:");
        int num = sc.nextInt();

        for(int i =0 ; i<=num; i++){
            System.out.println("Your loop value" + ": "+i);
        }
    }
}