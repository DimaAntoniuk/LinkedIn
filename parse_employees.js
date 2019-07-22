//SECOND PART
var domain = 'https://www.linkedin.com';
var origin = document.origin;
var employees = JSON.parse(window.localStorage.getItem('employees'));
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
console.log('done');
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
    set_employee_info(company_name, company_link, profile_link, name, job_title);
    // var patterns = JSON.parse(window.localStorage.getItem('patterns'));
    var patterns = ['recruiter'];
    for(i=0;i<patterns.length;i+=1){
      if(job_title.indexOf(patterns[i])>0) {
        employees.push(JSON.stringify(employee));
        break;
      }
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

function action() {
  setTimeout(parse, 3000);
}
action();

if(window.localStorage.employees) {
  window.localStorage.removeItem('employees');
}
window.localStorage.setItem('employees', JSON.stringify(employees));
var index = JSON.parse(window.localStorage.getItem('index'));
var links = JSON.parse(window.localStorage.getItem('links'));
index += 1;
window.localStorage.setItem('index', JSON.stringify(index));
if(links[index].length > 0) {
  window.localStorage.setItem('mode','ready to parse employees');
  window.location.href = links[index];
} else {
  window.localStorage.setItem('mode', 'stop');
}
