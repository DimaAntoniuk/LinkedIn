//SECOND PART
var employees = [];
var employee = {
  "company_name": "ComapanyName",
  "company_link": "ComapnyLink",
  "profile_link": "ProfileLink",
  "name": "Name",
  "job_title": "JobTitle"
};

$.each(links, function(index, value) {
  //get from localStorage

  add_employees();
});

function add_employees() {
  var company_name = $('.org-top-card-primary-content__content-inner span').text();
  var company_link = window.location.href;
  $('.link-without-visited-state').attr('href').trigger('click');
  parse();
  localStorage.setItem('employees', JSON.stringify(employees));
}

function set_employee_info(company_name, company_link, profile_link, name, job_title) {
  employee.company_name = company_name;
  employee.company_link = company_link;
  employee.profile_link = profile_link;
  employee.name = name;
  employee.job_title = job_title;
}

function parse() {
  scrollDown();
  setTimeout(parseEmployees, 4000);
}

function scrollDown() {
  $('head, body').animate({ scrollTop: $(document).height() }, 3000);
}

function parseEmployees() {
  $('search-result__info').each(function() {
    var prifile_link = $('.search-result__result-link').attr('href');
    var name = $('.search-result__result-link .name.actor-name').text();
    var job_title = $(this).find('.subline-level-1 span').text();
    set_employee_info(company_name, company_link, profile_link, name, job_title);
    if(job_title.search('(?i)C.O') || job_title.search('(?i)Head of') || job_title.search('(?i)recruiter')) {
      employees.push(employee);
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
