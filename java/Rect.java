//Encapsulation file
// package rectOne;
//
// import RectGetSet.*;

public class Rect {

  public static void main(String[] args){

    Rect2 rect = new Rect2();
    System.out.println(rect.getWidth());
    // System.out.printls(rect.height);
    // System.out.printls(rect.color);

    rect.setRectProps(25, 25, "green");
    System.out.println(rect.getHeight());
    System.out.println(rect.getWidth());
    System.out.println(rect.getColor());
  }
}
