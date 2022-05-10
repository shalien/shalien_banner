import 'dart:async';
import 'dart:html';

import 'dart:math';

import 'item.dart';


void main() {
  initCanvas();
  initCountdown();

  final twitchChat = querySelector('#twitch-chat') as IFrameElement;
  twitchChat.src = '${twitchChat.src}&parent=${document.domain}';

}

initCountdown() {
  var countdown = querySelector('#countdown')!;

  Duration duration =  Duration(minutes: 10);

  Timer.periodic(Duration(seconds: 1), (Timer t) {
    duration = duration - Duration(seconds: 1);

    if(duration.inSeconds < 0 || duration.isNegative) {
      countdown.text = '0:0';
      countdown.blur();
      t.cancel();
    } else {
      countdown.text = '${duration.inMinutes}:${(duration.inSeconds % 60).floor()}';
    }
  });



}


initCanvas() {
  final canvas = querySelector('#canvas')! as CanvasElement;
  final context = canvas.context2D;
  context.globalCompositeOperation = 'lighter';

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  final backgroundColors = ['#0a0a0a', '#0a0a0a'];
  final colors = [
    [ '#002aff', "#009ff2" ],
    [ '#0054ff', '#27e49b' ],
    [ '#202bc5' ,'#873dcc' ]
  ];

  var count = 70;
  final blur = [12, 70];
  final radius = [1, 120];

  context.clearRect(0, 0, canvas.width!, canvas.height!);

  final gradient = context.createLinearGradient(0, canvas.height!, canvas.width!, 0);

  gradient.addColorStop(0, backgroundColors.first);
  gradient.addColorStop(0, backgroundColors.last);

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width!, canvas.height!);

  List<Item> items = [];

  do {
    final currentRadius = random(radius.first, radius.last);
    final currentBlur = random(blur.first, blur.last);
    final currentX = random(-100, canvas.width! + 100);
    final currentY = random(-100, canvas.height! + 100);

    final colorIndex = (random(0, 299) / 100).floor();

    final colorOne = colors[colorIndex].first;
    final colorTwo = colors[colorIndex].last;

    context.beginPath();
    context.filter = 'blur($currentBlur)px';

    final currentGradient = context.createLinearGradient(currentX - currentRadius / 2, currentY - currentRadius / 2,
        currentX + currentRadius, currentY + currentRadius);

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

random(min, max) {
  return Random.secure().nextInt(max) + min;
}