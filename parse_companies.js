//FIRST PART
var links = [];
var domain = 'https://www.linkedin.com';
checkStartPosotion();

function action() {
  setTimeout(parse, 4000);
}
action();

function scrollDown() {
  $('.jobs-search-results').animate({ scrollTop: $('.jobs-search-results__list').height() }, 4000);
}

function checkStartPosotion() {
  if($('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected span').text() !== '1') {
    $('.artdeco-pagination__pages.artdeco-pagination__pages--number li').first().find('button').trigger('click');
  };
  scrollDown();
}

function parseLinks() {
  $('.job-card-search__company-name-link').each(function(){
    if($(this).attr('href') !== '#') {
      links.push($(this).attr('href'));
    }
  });
  setTimeout(nextPage, 3000);
}

function nextPage() {
  if($('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').text()) {
    $('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').trigger('click');
    setTimeout(parse, 3000);
  }
}

function parse() {
  scrollDown();
  setTimeout(parseLinks, 4000);
}


if(window.localStorage.links) {
  window.localStorage.removeItem('links');
}
window.localStorage.setItem('links', JSON.stringify(links));

var index = 0;
window.localStorage.setItem('index', JSON.stringify(index));

if(links[index]) {
  var win = window.open(links[index]);
  var script = win.document.creadteElement('script');
  script.src = 'parse_employees.js';
  win.document.head.appendChild(script);
}
