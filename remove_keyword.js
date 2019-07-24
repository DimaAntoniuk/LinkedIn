document.getElementById('remove').addEventListener('click', function() {
  chrome.storage.local.get('key_words', function(result) {
    if(result.key_words.length > 0) {
      var key_words = result.key_words;
      var word = $('#input_field').text();
      var index = key_words.indexOf(word);
      while(index >= 0) {
        key_words.slice(index, 1);
        index = key_words.indexOf(word);
      }
    }
  })
});
