import 'dart:html';
import 'dart:math';

import 'item.dart';
import 'utils.dart';

const baseColors = [
  [ '#ee0505', "#a10303"],
  [ '#0a0a0a', '#2b2b2b'],
  [ '#6d0202', '#850303'],
];


class AnimatedBackground {

  final List<List<String>> colors;
  final backgroundColors = ['#0a0a0a', '#0a0a0a'];
  final backgroundGradient = ['#0a0a0a', '#0a0a0a'];
  var count = random(55, 70);
  final blur = [12, 70];
  final radius = [1, 120];

  CanvasRenderingContext2D context;
  final CanvasElement canvas;
  final List<Item> items = [];

  AnimatedBackground(this.context, this.canvas, {this.colors = baseColors}) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  initCanvas() {
    context.clearRect(0, 0, canvas.width!, canvas.height!);

    final gradient = context.createLinearGradient(
        0, canvas.height!, canvas.width!, 0);

    gradient.addColorStop(0, backgroundColors.first);
    gradient.addColorStop(0, backgroundColors.last);

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width!, canvas.height!);


    do {
      final currentRadius = random(radius.first, radius.last);
      final currentBlur = random(blur.first, blur.last);
      final currentX = random(-100, canvas.width! + 100);
      final currentY = random(-100, canvas.height! + 100);

      final colorIndex = (random(0, 299) / 100).floor();

      final colorOne = colors[colorIndex].first;
      final colorTwo = colors[colorIndex].last;

      context.beginPath();
      context.filter = 'blur(${currentBlur}px)';

      final currentGradient = context.createLinearGradient(
          currentX - currentRadius / 2,
          currentY - currentRadius / 2,
          currentX + currentRadius,
          currentY + currentRadius);

      currentGradient.addColorStop(0, colorOne);
      currentGradient.addColorStop(1, colorTwo);
      context.fillStyle = currentGradient;
      context.fill();

      context.arc(currentX, currentY, currentRadius, 0, pi * 2);
      context.closePath();

      final directionX = (random(-99, 99) / 100).round();
      final directionY = (random(-99, 99) / 100).round();

      final currentItem = Item(
          currentX,
          currentY,
          currentBlur,
          currentRadius,
          directionX,
          directionY,
          colorOne,
          colorTwo,
          [
            currentX - currentRadius / 2,
            currentY - currentRadius / 2,
            currentX + currentRadius,
            currentY + currentRadius
          ]
      );

      items.add(currentItem);
      count--;
    } while (count >= 0);
  }

  resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.context2D;
    context.globalCompositeOperation = 'lighter';
  }

  void refreshCanvas({num? timestamps}) {

    context.clearRect(0, 0, canvas.width!, canvas.height!);

    final adjX = 2;
    final adjY = 2;
    final adjBlur = 1;

    for (var item in items) {
      if (item.x + (item.initialXDirection * adjX) >= canvas.width!
          && item.initialXDirection != 0
          || item.x + (item.initialXDirection * adjX) <= 0
              && item.initialXDirection != 0) {
        item.initialXDirection = item.initialXDirection * -1;
      }

      if (item.y + (item.initialYDirection * adjY) >= canvas.height!
          && item.initialYDirection != 0
          || item.y + (item.initialYDirection * adjY) <= 0
              && item.initialYDirection != 0) {
        item.initialYDirection = item.initialYDirection * -1;
      }

      if(item.blur + (item.initialBlurDirection * adjBlur) >= radius.last
          && item.initialBlurDirection != 0
          || item.blur + (item.initialBlurDirection * adjBlur) <= radius.first
              && item.initialBlurDirection != 0) {
        item.initialBlurDirection *= -1;
      }

      item.x += item.initialXDirection * adjX;
      item.y += item.initialYDirection * adjY;
      item.blur += item.initialBlurDirection * adjBlur;

      context.beginPath();
      context.filter = 'blur(${item.blur}px)';
      final gradient = context.createLinearGradient(
          item.gradient.first, item.gradient[1], item.gradient[2], item.gradient.last);
      gradient.addColorStop(0, item.colorOne);
      gradient.addColorStop(1, item.colorTwo);
      context.fillStyle = gradient;
      context.arc(item.x, item.y, item.radius, 0, pi * 2);
      context.fill();
      context.closePath();
    }
    window.requestAnimationFrame((timestamps) => refreshCanvas(timestamps: timestamps));
  }

}





