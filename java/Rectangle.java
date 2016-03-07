public class Rectangle {

  public int width;
  public int height;

  Rectangle(int width, int height, String color){

    this.width = width;
    this.height = height;
    this.color = color;

  }

  public int area(){
    //int in the method declaration lets java know what
    //the area method will be returning

    return this.width * this.height;
  }

  public static void main(String[] args){


    Rectangle myRect = new Rectangle(100, 100);

    System.out.println(myRect.area());

  }
}
