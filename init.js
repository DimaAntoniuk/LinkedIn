var extension_url = window.location.origin;
chrome.storage.sync.set({'extension_url':JSON.stringify(extension_url)});

chrome.tabs.query({'active': true}, function (tabs) {
  var url = tabs[0].url;
  if(url.startsWith('https://www.linkedin.com/jobs/search')) {
    document.getElementById('start').addEventListener('click', function(){
      chrome.tabs.executeScript(tabs[0].id, {
        file:"search_init.js"
      });
    });
  };
});
