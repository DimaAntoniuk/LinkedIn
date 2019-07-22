chrome.storage.local.set({'mode':'ready to parse companies'});
var script = window.document.createElement('script');
script.src = 'parse_companies.js';
window.document.head.appendChild(script);
