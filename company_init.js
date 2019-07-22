function action() {
  if(window.localStorage.getItem('mode') === 'ready to parse employees') {
    window.localStorage.setItem('mode','parsing');
    var script = window.document.createElement('script');
    script.src = 'chrome-extension://fampefibmfnnfhljjalgkboogphidkge/parse_employees.js';
    window.document.head.appendChild(script);
  }
}
setTimeout(action, 3000);
