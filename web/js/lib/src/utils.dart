import 'dart:math';

random(min, max) {
  return Random.secure().nextInt(max) + min;
}