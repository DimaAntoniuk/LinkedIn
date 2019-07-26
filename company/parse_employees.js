//SECOND PART
var domain = 'https://www.linkedin.com';
var origin = document.origin;
var employees;
chrome.storage.local.get('employees', function(result) {
  employees = result.employees;
});
var company_name;
var company_link;
chrome.storage.local.get('company_name', function(result) {
  company_name = result.company_name;
});
chrome.storage.local.get('company_link', function(result) {
  company_link = result.company_link;
});

function parse() {
  scrollDown();
  setTimeout(parseEmployees, 4000);
}

function scrollDown() {
  $('html, body').animate({ scrollTop: $(document).height() }, 3000);
}

function parseEmployees() {
  $('.search-results__list li').each(function() {
    var profile_link = '#';
    if($(this).find('.search-result__result-link').attr('href') !== '#') {
      profile_link = domain + $(this).find('.search-result__result-link').attr('href');
    }
    var name = $(this).find('.search-result__result-link .name.actor-name').text();
    var job_title = $(this).find('.subline-level-1 span').text().toLowerCase();
    console.log(job_title);
    chrome.storage.local.get('key_words', function(result) {
      key_words = result.key_words;
      for(i=0;i<key_words.length;i+=1){
        if(job_title.indexOf(key_words[i].key_word)>=0) {
          employees.push({company_name:company_name, company_link:company_link, profile_link:profile_link, name:name, job_title:job_title});

          break;
        }
      }
    });
  });
  setTimeout(nextPage, 3000);
}

function nextPage() {
  var next_page_number = $('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').text();
  if(next_page_number.length > 0 && parseInt(next_page_number)<3) {
    $('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').trigger('click');
    setTimeout(parse, 3000);
  } else {
    setTimeout(action, 3000);
  }
}

parse();

function action() {
  chrome.storage.local.get({employees:[]}, function() {
    chrome.storage.local.set({employees:employees}, function(){

    });
  });

  chrome.storage.local.get('index', function(result) {
    var index = result.index;
    index += 1;
    chrome.storage.local.set({index:index});
    chrome.storage.local.get('links', function(result) {
      var links = result.links;
      if(links.length > index) {
        chrome.storage.local.set({mode:'ready to parse employees'});
        window.location.href = links[index].link;
      } else {
        chrome.storage.local.set({mode:'stop'});
      }
    });
  });
}
