jQuery(document).on('click', '#clear_keywords', function(){
  chrome.storage.local.get({key_words:[]}, function(result) {
    chrome.storage.local.set({key_words:[]});
  });
});
