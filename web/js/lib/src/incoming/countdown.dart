import 'dart:async';
import 'dart:html';

class Countdown {

  Duration duration;
  final Element element;

  Countdown(this.element, {this.duration = const Duration(minutes: 10)}) {
    Timer.periodic(Duration(seconds: 1), (Timer t) {
      duration = duration - Duration(seconds: 1);

      if (duration.inSeconds < 0 || duration.isNegative) {
        element.text = '00:00';
        element.blur();
        t.cancel();
      } else {

        var minutes = duration.inMinutes.toString().padLeft(2, '0');
        var seconds = (duration.inSeconds % 60).floor().toString().padLeft(2, '0');

        element.text =
        '$minutes:$seconds';
      }
    });

  }

}