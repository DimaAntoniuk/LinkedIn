console.log('here');
var mode;
chrome.storage.local.get('mode', function(result) {
  mode = result.mode;
});
// console.log('mode');
if(mode === 'ready to parse employees') {
  chrome.storage.local.set({'mode':'parsing'});
  chrome.tabs.query({'active': true}, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {file:"parse_employees.js"});
  });
  // var script = window.document.createElement('script');
  // script.src = 'chrome-extension://fampefibmfnnfhljjalgkboogphidkge/parse_employees.js';
  // window.document.head.appendChild(script);
}
