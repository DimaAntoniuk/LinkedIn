//SECOND PART
var domain = 'https://www.linkedin.com';
var employees = [];
var employee = {
  "company_name": "ComapanyName",
  "company_link": "ComapnyLink",
  "profile_link": "ProfileLink",
  "name": "Name",
  "job_title": "JobTitle"
};

var company_name = $('.org-top-card-primary-content__content-inner span').text();
var company_link = window.location.href;
$('.link-without-visited-state').trigger('click');
action();

function action() {
  setTimeout(parse, 1000);
}
localStorage.setItem('employees', JSON.stringify(employees));

function set_employee_info(company_name, company_link, profile_link, name, job_title) {
  employee.company_name = company_name;
  employee.company_link = company_link;
  employee.profile_link = profile_link;
  employee.name = name;
  employee.job_title = job_title;
}

function parse() {
  scrollDown();
  setTimeout(parseEmployees, 3000);
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
    var job_title = $(this).find('.subline-level-1 span').text();
    set_employee_info('company_name', 'company_link', profile_link, name, job_title);
    var pattern_cxo = /c.o/i;
    var pattern_head = /head\sof/i;
    var pattern_recruiter = /recruiter/i;
    if(job_title.search(pattern_cxo)>0 || job_title.search(pattern_head)>0 || job_title.search(pattern_recruiter)>0) {
      employees.push(JSON.stringify(employee));
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
