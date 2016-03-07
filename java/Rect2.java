public class Rect2 {
  private double height = 1;
  private double width = 1;
  private String color = "blue";


  public void setRectProps(double height, double width, String color){
    this.height = height;
    this.width = width;
    this.color = color;
  }

  public double getHeight(){
    return this.height;
  }

  public double getWidth(){
    return this.width;
  }

  public String getColor(){
    return this.color;
  }

}

class car {

  private int speed;

  public void startEngine(){
    System.out.println("Starting Engine");
  }

  public int getSpeed(){
    return this.speed;
  }

}
