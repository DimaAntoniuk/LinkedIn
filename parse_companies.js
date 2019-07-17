var links = [];

checkStartPosotion();
parse();

function scrollDown() {
  $('.jobs-search-results').animate({ scrollTop: $('.jobs-search-results__list').height() }, 3000);
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
  nextPage();
}

function nextPage() {
  if($('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').text()) {
    $('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').trigger('click');
    parse();
  }
}

function parse() {
  scrollDown();
  setTimeout(parseLinks, 4000);
}

localStorage.setItem('links', JSON.stringify(links));
