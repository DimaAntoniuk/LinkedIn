jQuery('#remove_keyword').click(function(){
  chrome.storage.local.get({key_words:[]}, function(result) {
    if(result.key_words.length > 0) {
      var key_words = result.key_words;
      var word = $('#input_field').value;
      for(i=0;i<key_words.length;i++) {
        if(key_words.key_word === word) {
          key_words.slice(i, 1);
        }
      }
      chrome.storage.local.set({key_words:key_words});
    }
  });
});
