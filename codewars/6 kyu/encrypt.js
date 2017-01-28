function encrypt(text, rule) {
  return text.split('').map((l) => {  return String.fromCharCode((l.charCodeAt(0) + rule) % 256) }).join('');
};
