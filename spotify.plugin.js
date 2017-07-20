//META{"name":"Spotify"}*//

var Spotify = function () {};

Spotify.prototype.onMessage = function () {
};

Spotify.prototype.onSwitch = function () {
};

Spotify.prototype.start = function () {
  this.setup();
};

Spotify.prototype.load = function () {
  this.setup = function() {
    var src = 'https://open.spotify.com/user/prxmusic/playlist/3VEFRGe3APwGRl4eTpMS4x';
    var iframe = '<iframe id="spotifyEmbedded" src="'+ src +'" width="240px" height="100%" frameborder="0" allowtransparency="true"></iframe>';
    var hideButton = '<div class="hideButton"><div class="dock-toggle"><span class="chevron"></span></div></div>'


    $(".content").append(iframe);
    $(".content").append(hideButton);

    $(".chevron").css({
    	"border-style": "solid",
    	"border-width": "0.20em 0.20em 0 0",
    	"content": "",
    	"display": "inline-block",
    	"height": "0.45em",
    	"left": "0.55em",
    	"position": "relative",
    	"top": "1.25em",
    	"transform": "rotate(-135deg)",
    	"vertical-align": "top",
    	"width": "0.45em",
      "transition": "transform 0.3s ease-out 0.1s",
    });

    $(".dock-toggle").css({
      "width": "50px",
      "height": "50px",
      "border-radius": "25px",
      "cursor": "pointer",
      "background-color": "#181818",
      "transition": "transform 0.2s ease-out 0.1s",
      "transform": "translateX(0%)",
    });

    $(".hideButton").css({
      "top": "50%",
      "position": "absolute",
      "right": "-25px",
      "z-index": "5",
    });

    $("#spotifyEmbedded").css({
      "z-index": "10",
      "position": "absolute",
      "transition": "transform 0.2s ease-out 0.1s",
      "transform": "translateX(100%)",
      "right": "0",
    });

    var num = 0;


    $(".dock-toggle").click(function() {
      if(num == 0){
        $(this).css({"transform": "translateX(-485%)"});
        $("#spotifyEmbedded").css({"transform": "translateX(0%)"});
        $(".chevron").css({"transform": "rotate(45deg)"});
        num = 1;
      } else if(num == 1){
        $(this).css({"transform": "translateX(-0%)"});
        $("#spotifyEmbedded").css({"transform": "translateX(100%)"});
        $(".chevron").css({"transform": "rotate(-135deg)"});
        num = 0;
      }
    });

  }
};

Spotify.prototype.unload = function () {
  $("#spotifyEmbedded").hide();
  $(".hideButton").hide();
};

Spotify.prototype.stop = function () {
  $("#spotifyEmbedded").hide();
  $(".hideButton").hide();
};

Spotify.prototype.getSettingsPanel = function () {
  return "";
};

Spotify.prototype.getName = function () {
  return "Spotify";
};
Spotify.prototype.getDescription = function () {
  return "Get embedded spotify in discord";
};
Spotify.prototype.getVersion = function () {
  return "1.0.1";
};
Spotify.prototype.getAuthor = function () {
  return "MarkCorazon";
};
