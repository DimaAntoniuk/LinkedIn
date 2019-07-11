$('.jobs-search-results__list.artdeco-list li').each(function(){
  console.log($(this).find('.job-card-search__company-name').find('a').attr('href'));
})
