jQuery(document).on('click', '#download', function() {
  chrome.storage.local.get('employees', function(result) {
    var text = JSONToCSV(result.employees);
    var data = new Blob([text], {type: 'text/csv'});
    var url = URL.createObjectURL(data);
    // $('#download').href = url;
    chrome.downloads.download({
      url:url,
      filename:'employees.csv'
    })
  });
});

function JSONToCSV(objArray) {
  var json = objArray;
  var fields = Object.keys(json[0]);
  var replacer = function(key, value) { return value === null ? '' : value }
  var csv = json.map(function(row){
    return fields.map(function(fieldName){
      return JSON.stringify(row[fieldName], replacer)
    }).join(',');
  })
  csv.unshift(fields.join(','));
  var result = csv.join('\r\n');
  return result;
}

// function convertToCSV(objArray) {
//   var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
//   var str = '';
//   for (var i = 0; i < array.length; i++) {
//     var line = '';
//     for (var index in array[i]) {
//         if (line != '') line += ','
//         line += array[i][index];
//     }
//     str += line + '\r\n';
//   }
//   return str;
// }
