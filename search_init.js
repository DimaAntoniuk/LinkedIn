var extension_url = window.location.origin;
chrome.storage.local.set({'extension_url':JSON.stringify(extension_url)});

chrome.tabs.query({'active': true}, function (tabs) {
  var url = tabs[0].url;
  if(url.startsWith('https://www.linkedin.com/jobs/search')) {
    document.getElementById('start').addEventListener('click', function(){
      chrome.storage.local.set({'mode':'parsing companies'});
      chrome.tabs.executeScript(tabs[0].id, {file:"jquery-3.4.1.min.js"}, function() {
        chrome.tabs.executeScript(tabs[0].id, {file:"parse_companies.js"})
      });
    });
  };
});
