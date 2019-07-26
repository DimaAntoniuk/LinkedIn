var extension_url = window.location.origin;
chrome.storage.local.set({extension_url:extension_url});

chrome.tabs.getSelected(null, function(tab) {
  var url = tab.url;
  if(url.startsWith('https://www.linkedin.com/jobs/search')) {
    document.getElementById('start').addEventListener('click', function(){
      chrome.storage.local.set({employees:[]});
      chrome.storage.local.set({all_companies:0});
      chrome.storage.local.set({index:0});
      chrome.storage.local.set({mode:'parsing companies'});
      chrome.tabs.executeScript(tab.id, {file:"jquery-3.4.1.min.js"}, function() {
        chrome.tabs.executeScript(tab.id, {file:"search/parse_companies.js"})
      });
    });
  };
});
