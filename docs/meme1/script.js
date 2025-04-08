document.getElementById('overlay').addEventListener('click', function() {
  var video = document.getElementById('memeVideo');
  this.style.display = 'none';
  video.controls = true;
  video.muted = false;
  video.play();
});
