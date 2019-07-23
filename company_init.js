var mode;
chrome.storage.local.get('mode', function(result) {
  mode = result.mode;
  parse();
});
function parse() {
  if(mode === 'ready to parse employees') {
    chrome.storage.local.set({'mode':'parsing'});
    var company_name = $('.org-top-card-primary-content__content-inner span').text();
    var company_link = window.location.href;
    chrome.storage.local.set('company_name':company_name);
    chrome.storage.local.set('company_link':company_link);
    $('.link-without-visited-state').trigger('click');
  }
}
