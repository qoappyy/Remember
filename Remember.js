window.addEventListener('DOMContentLoaded', () => {
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
  let text = params.get('text');
  const img = params.get('img');

  // Ersetze "_" durch Leerzeichen
  if (text !== null) {
    text = text.replace(/_/g, ' '); // Hier ersetzen wir alle "_" durch Leerzeichen
  }

  // Elemente greifen
  const container = document.getElementById('container');
  const bitmoji = document.getElementById('bitmoji');

  // Wenn Text vorhanden -> Sprechblase dynamisch erstellen
  if (text !== null && text.trim() !== "") {
    const speechContainer = document.createElement('div');
    speechContainer.id = 'speech-container';

    const speechBubble = document.createElement('img');
    speechBubble.id = 'speech-bubble';
    speechBubble.src = 'img/Speechbubble.png';
    speechBubble.alt = 'Sprechblase';

    const speechText = document.createElement('div');
    speechText.id = 'speech-text';
    speechText.textContent = text;

    speechContainer.appendChild(speechBubble);
    speechContainer.appendChild(speechText);

    container.insertBefore(speechContainer, bitmoji);
  }

  // Wenn Bild-Index vorhanden -> entsprechendes Bitmoji setzen
  if (img !== null && !isNaN(img) && img >= 1 && img <= 8) {
    bitmoji.src = bitmojiImages[img - 1];
  }
});
