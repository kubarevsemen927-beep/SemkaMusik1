// Получаем элементы
const playlistItems = document.querySelectorAll('#playlist li');
const fullscreenPlayer = document.getElementById('fullscreen-player');
const closeBtn = document.getElementById('close-player');
const audioPlayer = document.getElementById('audio-player');
const bigCover = document.getElementById('big-cover');
const bigTitle = document.getElementById('big-title');
const bigArtist = document.getElementById('big-artist');

// Функция для открытия плеера
function openPlayer(src, title, artist, cover) {
    audioPlayer.src = src;
    
    bigTitle.textContent = title;
    bigArtist.textContent = artist;
    
    bigCover.src = cover;

    audioPlayer.play();

    // Показываем плеер
    fullscreenPlayer.classList.add('active');
}

// Добавляем обработчик клика на каждый трек в плейлисте
playlistItems.forEach(item => {
   item.addEventListener('click', () => {
       const src = item.getAttribute('data-src');
       const title = item.getAttribute('data-title');
       const artist = item.getAttribute('data-artist');
       const cover = item.getAttribute('data-cover');
       
       openPlayer(src, title, artist, cover);
   });
});

// Закрываем плеер по клику на крестик
closeBtn.addEventListener('click', () => {
   fullscreenPlayer.classList.remove('active');
   audioPlayer.pause(); // Останавливаем музыку при закрытии
});