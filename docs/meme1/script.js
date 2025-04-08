function startVideo() {
  const overlay = document.getElementById('overlay');
  const container = document.querySelector('.container');
  const video = document.getElementById('memeVideo');

  overlay.style.display = 'none';
  container.classList.add('active');
  container.style.display = 'flex';

  video.muted = false;
  video.play();
}
