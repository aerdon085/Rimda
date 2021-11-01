function Sound(name) {
  this.name = name;
  this.audio = document.createElement('audio');
  var source = document.createElement('source');
  source.src = '/sounds/' + name + '.mp3';
  this.audio.appendChild(source);
}

Sound.prototype.play = function() {
  this.stop();
  this.audio.play();
};

Sound.prototype.repeat = function() {
  this.audio.loop = true;
  this.audio.play();
};

Sound.prototype.stop = function() {
  this.audio.repeat = false;
  this.audio.currentTime = 0;
  this.audio.pause();
};

var Sounds = {
  all: [
    'bubble','buzz','click','donk',
    'drip','guitar','knock','scratch',
    'snick','spring','swish'
  ]
};
Sounds.all.forEach(function(sound) {
  Sounds[sound] = new Sound(sound);
});
