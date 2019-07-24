document.getElementById('add').addEventListener('click', function() {
  chrome.storage.local.get({key_words:[]}, function(result) {
    var key_words = result.key_words;
    key_words.push({key_word:$('#input_field').text()});
  });
});
