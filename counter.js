chrome.storage.onChanged.addListener(function() {
  chrome.storage.local.get({links:[]}, function(result) {
    var result_r = result.links.length;
    chrome.storage.local.get('index', function(result) {
      var result_l = result.index + 1;
      if(result_r < result_l) {
        result_l = result_r;
      }
      var text = result_l.toString() + ' / ';
      text += result_r.toString();
      try {
        jQuery('#counter')[0].innerText = text;
      }
      catch(err) {
      }
    });
  });
});
