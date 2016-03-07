public class Ops {
    public static int sum (int x, int y){
        return x + y;
    }

    // public static int multiply (int a, int b, int c){
    //   return a * b * c;
    // }

    // public static void main(String[] args){
    //   System.out.println((sum(1,2)));
    //   System.out.println(multiply(1,2,3));
    //
    // }

  public static void main(String [] args) {

    int first;
    //declare your variable types
    int second;

    //set your variables to their values
    first = 1;
    second = 2;

    //call on the method for which you wish to use your variables 
    int result = sum(first, second);

    System.out.println(result);
  }
}
