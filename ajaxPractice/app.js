console.log('hello');
$.ajax({
  dataType: "json",
  url: 'http://www.omdbapi.com/?t=star&wars&y=&plot=short&r=json',
  success: success
});

function success(data){
  console.log(data);
}
