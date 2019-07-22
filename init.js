chrome.browserAction.onClicked.addListener(function() {
  console.log('0');
  chrome.tabs.query({'active': true}, function (tabs) {
    var url = tabs[0].url;
    console.log('1');
    if(url.startsWith('https://www.linkedin.com/jobs/search')) {
      console.log('2');
      document.getElementById('start').addEventListener('click', function(){
        chrome.tabs.executeScript(tabs[0], {
          file:"search_init.js"
        });
      });
    };
  });
});
