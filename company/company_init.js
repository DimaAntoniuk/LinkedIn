var mode;
chrome.storage.local.get('mode', function(result) {
  mode = result.mode;
  $(window).scroll({
   top: 0,
   left: 0,
   behavior: 'smooth'
  });
  setTimeout(parse, 3000);
});
function parse() {
  if(mode === 'ready to parse employees') {
    chrome.storage.local.set({'mode':'parsing'});
    var company_name = $('.org-top-card-primary-content__content-inner span').text();
    var company_link = window.location.href;
    chrome.storage.local.set({'company_name':company_name});
    chrome.storage.local.set({'company_link':company_link});
    chrome.storage.local.get('links', function(result) {
      var links = result.links;
      chrome.storage.local.get('index', function(result) {
        chrome.storage.local.set({country:links[result.index].country});
      });
    });
    var all_employees_link = $('.relative .display-flex .org-top-card__right-col .link-without-visited-state.inline-block').attr('href');
    if($('.relative .display-flex .org-top-card__right-col .link-without-visited-state.inline-block').attr('href')) {
      window.location.href = all_employees_link;
    } else {
      chrome.storage.local.get('index', function(result) {
        var index = result.index;
        index += 1;
        chrome.storage.local.set({index:index});
        chrome.storage.local.get('links', function(result) {
          var links = result.links;
          try {
            chrome.storage.local.set({mode:'ready to parse employees'});
            window.location.href = links[index].link;
          }
          catch(err) {
            chrome.storage.local.set({mode:'stop'});
          }
        });
      });
    }
  }
}
