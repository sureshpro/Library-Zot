function hello(){

var xmlhttp = new XMLHttpRequest();
var url = "https://openlibrary.org/search/authors.json?q="+document.getElementById('inputn').value+"&mode=ebooks";
var aurthortitle = "https://openlibrary.org/authors/OL23919A.json";


xmlhttp.open("GET",url,true);
xmlhttp.send();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var data = JSON.parse(this.responseText);
    $('#example').DataTable( {
        "data":data.docs,
        "columns": [
            { "data": "key" },
            { "data": "name" },
            { "data": "type" },
            { "data": "work_count"}
           
        ]
    } );

  }
}
}