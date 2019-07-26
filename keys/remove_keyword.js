jQuery(document).on('click', '#remove_keyword', function(){
  chrome.storage.local.get({key_words:[]}, function(result) {
    var key_words = result.key_words;
    var word = jQuery('#input_field').val().toLowerCase();
    for(var i=0;i<key_words.length;i++) {
      if(key_words[i].key_word === word) {
        key_words.slice(i, 1);
      }
    }
    chrome.storage.local.set({key_words:key_words});
  });
});
