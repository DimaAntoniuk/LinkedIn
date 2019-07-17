
var domain = 'https://www.linkedin.com';
var employee = {
  "company_name": "ComapanyName",
  "company_link": "ComapnyLink",
  "profile_link": "ProfileLink",
  "name": "Name",
  "job_title": "JobTitle"
};
var employees = [];

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
function set_employee_info(company_name, company_link, profile_link, name, job_title) {
  employee.company_name = company_name;
  employee.company_link = company_link;
  employee.profile_link = profile_link;
  employee.name = name;
  employee.job_title = job_title;
}
