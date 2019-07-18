if(window.location.href.startsWith('https://www.linkedin.com/company') && window.localStorage.mode === 'ready to parse employees') {
  var script = window.document.createElement('script');
  script.src = 'parse_employees.js';
  window.document.head.appendChild(script);
}
