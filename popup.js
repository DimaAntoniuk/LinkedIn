var links = [];

function scrollDown() {
  $('.jobs-search-results__list.artdeco-list').animate({ scrollTop: $(document).height() }, 1000);
}

function checkStartPosotion() {
  scrollDown();
  if($('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected span').text() !== '1') {
    $('.artdeco-pagination__pages.artdeco-pagination__pages--number li').first().find('button').trigger('click');
  };
}

checkStartPosotion();

function parseLinks() {
  console.log($('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected span').text());
  $('.job-card-search__company-name-link').each(function(){
    if($(this).attr('href') !== '#') {
      links.push($(this).attr('href'));
    }
  });
  // $('.jobs-search-results__list.artdeco-list li').each(function() {
  //   links.push($(this).find('.job-card-search__company-name a').attr('href'));
  // });
}

function nextPage() {
  if($('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').text()) {
    $('.artdeco-pagination__indicator.artdeco-pagination__indicator--number.active.selected').next().find('button').trigger('click');
    parse();
  } else {
    parseLinks();
  };
}

function parse() {
  scrollDown();
  // $(window).load(function() {
  parseLinks();
  // });
  nextPage();
}

parse();
