class Item {

  double x;
  double y;
  double blur;
  double radius;
  double initialXDirection;
  double initialYDirection;
  double initialBlurDirection;
  String colorOne;
  String colorTwo;
  List<double> gradient;

  Item(this.x,
      this.y,
      this.blur,
      this.radius,
      this.initialXDirection,
      this.initialYDirection,
      this.colorOne,
      this.colorTwo,
      this.gradient) : initialBlurDirection = initialXDirection;

}