if(window.location.href.startsWith('https://www.linkedin.com/jobs/search')) {
  window.localStorage.setItem('mode', 'ready to parse companies');
  var script = window.document.createElement('script');
  script.src = 'parse_companies.js';
  window.document.head.appendChild(script);
}
