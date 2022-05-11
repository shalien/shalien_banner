
import 'dart:async';
import 'dart:html';

import 'lib/shabroad_ui.dart';
import 'lib/src/utils.dart';

final canvas = querySelector('#canvas')! as CanvasElement;
final context = canvas.context2D;

const baseColors = [
  [ '#ae0505', "#710303"],
  [ '#0a0a0a', '#1b2b2b'],
  [ '#3d0202', '#450303'],
];

final animatedBackground = AnimatedBackground(context, canvas, colors: baseColors);

final twitchChatRoot = querySelector('#twitch-chat')! as IFrameElement;

void main() {

  TwitchChat(twitchChatRoot);

  animatedBackground.initCanvas();
  window.requestAnimationFrame((timestamps) => animatedBackground.refreshCanvas(timestamps: timestamps));

  window.onResize.listen((_) {
    animatedBackground.resizeCanvas();
  });
}

