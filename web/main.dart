import 'dart:async';
import 'dart:html';


void main() {
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
