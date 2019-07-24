//FIRST PART
var links = [];
var domain = document.origin;
checkStartPosition();

function action() {
  setTimeout(parse, 4000);
}
action();

function scrollDown() {
  $('.jobs-search-results').animate({ scrollTop: $('.jobs-search-results__list').height() }, 4000);
}

function checkStartPosition() {
  if($('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected span').text() !== '1') {
    $('.artdeco-pagination__pages.artdeco-pagination__pages--number li').first().find('button').trigger('click');
  };
  scrollDown();
}

function parseLinks() {
  $('.job-card-search__company-name-link').each(function(){
    if($(this).attr('href') !== '#') {
      links.push({link:$(this).attr('href')});
    }
  });
  setTimeout(nextPage, 3000);
}

function nextPage() {
  if($('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').text()) {
    $('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').trigger('click');
    setTimeout(parse, 3000);
  } else {
    setTimeout(saveAndContinue, 3000);
  }
}

function parse() {
  scrollDown();
  setTimeout(parseLinks, 4000);
}


function saveAndContinue() {
  chrome.storage.local.get('links', function() {
    chrome.storage.local.remove('links');
  });
  chrome.storage.local.get({links:[]}, function(result) {
    chrome.storage.local.set({links:links}, function() {
      chrome.storage.local.get('links', function(result) {
        var index = 0;
        var links = result.links;
        chrome.storage.local.set({index:index});
        chrome.storage.local.set({mode:'ready to parse employees'});
        if(links[index].link.length > 0) {
          window.location.href = links[index].link;
        }
      });
    });
  });
}
