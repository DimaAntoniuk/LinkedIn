document.getElementById('remove').addEventListener('click', function() {
  chrome.storage.local.get({key_words:[]}, function(result) {
    if(result.key_words.length > 0) {
      var key_words = result.key_words;
      var word = $('#input_field').text();
      for(i=0;i<key_words.length;i++) {
        if(key_words.key_word === word) {
          key_words.slice(i, 1);
        }
      }
    }
  });
});
