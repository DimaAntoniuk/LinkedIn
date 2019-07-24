var extension_url = window.location.origin;
chrome.storage.local.set({'extension_url':JSON.stringify(extension_url)});
// chrome.tabs.query({'active': true}, function (tabs) {
chrome.tabs.getSelected(null, function(tab) {
  var url = tab.url;
  if(url.startsWith('https://www.linkedin.com/jobs/search')) {
    document.getElementById('start').addEventListener('click', function(){
      chrome.storage.local.set({'mode':'parsing companies'});
      chrome.tabs.executeScript(tab.id, {file:"jquery-3.4.1.min.js"}, function() {
        chrome.tabs.executeScript(tab.id, {file:"parse_companies.js"})
      });
    });
  };
});
