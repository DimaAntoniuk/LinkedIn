jQuery('#add_keyword').click(function(){
  chrome.storage.local.get({key_words:[]}, function(result) {
    var key_words = result.key_words;
    key_words.push({key_word:$('#input_field').value});
    chrome.storage.local.set({key_words:key_words});
  });
});
