
import 'dart:html';

import 'lib/shabroad_ui.dart';

final countdown = querySelector('#countdown')!;
final canvas = querySelector('#canvas')! as CanvasElement;
final context = canvas.context2D;
final animatedBackground = AnimatedBackground(context, canvas);

final twitchChatRoot = querySelector('#twitch-chat')! as IFrameElement;

void main() {

  Countdown(countdown);

  TwitchChat(twitchChatRoot);

  animatedBackground.initCanvas();
  window.requestAnimationFrame((timestamps) => animatedBackground.refreshCanvas(timestamps: timestamps));

  window.onResize.listen((_) {
    animatedBackground.resizeCanvas();
  });
}

