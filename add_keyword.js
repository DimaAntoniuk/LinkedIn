jQuery(document).on('click', '#add_keyword', function(){
  chrome.storage.local.get({key_words:[]}, function(result) {
    var key_words = result.key_words;
    var word = jQuery('#input_field').val().toLowerCase();
    key_words.push({key_word:word});
    chrome.storage.local.set({key_words:key_words});
  });
});
