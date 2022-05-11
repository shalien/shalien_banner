
import 'dart:html';

const twitchChatUrl = 'https://www.twitch.tv/embed/shalien/chat?darkpopout';

class TwitchChat {

  final IFrameElement iframe;

  TwitchChat(this.iframe) {
    iframe.src = '${twitchChatUrl}&parent=${window.location.host.split(':').first}';

  }




}