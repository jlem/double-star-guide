const { JSDOM } = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('c:/Users/Jon/Projects/Web/double-stars/tuner.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously' });
const window = dom.window;
const document = window.document;

setTimeout(() => {
  // Toggle OFF
  document.getElementById('globalBrightnessToggle').click();
  console.log('After toggle, isON =', window.isBrightnessPerceptionActive);
  
  // Get initial value
  const slider = document.getElementById('sliderOffMagExp');
  console.log('Initial slider value:', slider.value);
  console.log('Initial flux2 for Rigel (6.7 mag diff):', document.getElementById('sRigel60').innerText);
  console.log('Initial flux2 for Struve (0.8 mag diff):', document.getElementById('sStruve60').innerText);

  // Change slider
  slider.value = '1.0';
  slider.dispatchEvent(new window.Event('input'));

  console.log('After slider change to 1.0, isON =', window.isBrightnessPerceptionActive);
  console.log('New JSON:', document.getElementById('configJson').value);
  console.log('New flux2 for Rigel (6.7 mag diff):', document.getElementById('sRigel60').innerText);
  console.log('New flux2 for Struve (0.8 mag diff):', document.getElementById('sStruve60').innerText);

}, 100);
