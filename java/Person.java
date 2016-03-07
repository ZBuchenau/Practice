public class Person {

  //create class-level variables
  public String first;
  public String last;

  //Constructor "Method". We invoke this using the "new" keyword instantiate on object
  Person(String first, String last){
    //You must use this.first and this.last
    // because this will bind them to the proper scope in java.
    //this is called "shadowing"
    this.first = first;
    this.last = last;
    //Once again, these variables are shadows of the public class variables
    //String first and String last
  }

  public String fullName(){
    //this function will use the class level variables
    //first and last. Therefore, you don't need to include
    //"this." at the beginning of the return statement
    return first + " " + last;
  }

  public static void main(String[] args){
    // this declares that main will take in a string and arguments

    Person rambo = new Person("Sylvester", "Stallone");
    // Person rambo creates a new version of Person with the 2 arguments
    // declared as Sylvester and Stallone
    System.out.println(rambo.fullName());
    //call the method
  }
}
