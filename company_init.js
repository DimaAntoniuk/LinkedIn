var mode;
chrome.storage.local.get('mode', function(result) {
  mode = result.mode;
});
if(mode === 'ready to parse employees') {
  chrome.storage.local.set({'mode':'parsing'});
  var script = window.document.createElement('script');
  script.src = 'parse_employees.js';
  window.document.head.appendChild(script);
}
