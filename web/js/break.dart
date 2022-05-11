
import 'dart:async';
import 'dart:html';

import 'lib/shabroad_ui.dart';
import 'lib/src/utils.dart';

final canvas = querySelector('#canvas')! as CanvasElement;
final context = canvas.context2D;
final animatedBackground = AnimatedBackground(context, canvas);

final twitchChatRoot = querySelector('#twitch-chat')! as IFrameElement;

void main() {

  final jokeElement = querySelector('#joke');
  final jokes = [
    'Et sinon, ca va ?',
    'Ca va ?',
    'Sur Twitch, toutes les deux heures, la pause s\'impose',
    'Salut Maman !',
    'All your stream are belong to us',
    'Suivez moi sur Twitter : _shalien',
    'AFK',
    'Bientôt de retour',
    'Penser à vous hydrater',
    'Status : En pause',
    'Status : AFK',
    'Je reviens bientôt',
    'Le chat, je vous vois ...'
    'Error: Stream not found'
  ];


  TwitchChat(twitchChatRoot);

  var selectedJoke = random(0, jokes.length - 1);

  jokeElement!.text = jokes[selectedJoke];

  Timer.periodic(Duration(minutes: 3, seconds: 30), (timer)
  {
    selectedJoke = random(0, jokes.length - 1);
    jokeElement.text = jokes[selectedJoke];
  });

  animatedBackground.initCanvas();
  window.requestAnimationFrame((timestamps) => animatedBackground.refreshCanvas(timestamps: timestamps));

  window.onResize.listen((_) {
    animatedBackground.resizeCanvas();
  });
}

