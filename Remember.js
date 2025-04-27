// Bitmoji-Bilder (angepasst auf deinen Ordner img/Random/)
const bitmojiImages = [
  'img/Random/1.png',
  'img/Random/2.png',
  'img/Random/3.png',
  'img/Random/4.png',
  'img/Random/5.png',
  'img/Random/6.png',
  'img/Random/7.png',
  'img/Random/8.png'
];

// URL-Parameter lesen
const params = new URLSearchParams(window.location.search);
const text = params.get('text');
const img = params.get('img');

// Elemente greifen
const speechContainer = document.getElementById('speech-container');
const speechText = document.getElementById('speech-text');
const bitmoji = document.getElementById('bitmoji');

// Wenn Text vorhanden -> Sprechblase anzeigen und Text setzen
if (text) {
  speechContainer.classList.remove('hidden');
  speechText.textContent = decodeURIComponent(text);
}

// Wenn Bild-Index vorhanden -> entsprechendes Bitmoji setzen
if (img && !isNaN(img) && img >= 1 && img <= 8) {
  bitmoji.src = bitmojiImages[img - 1];
}