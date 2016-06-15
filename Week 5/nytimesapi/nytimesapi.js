
  $('#runSearch').on("click", function() {
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "5a04693bc243494cae795762e5f45ce4",

});


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json ?q=" + term + "&api_key=5a04693bc243494cae795762e5f45ce4";
$.ajax({
  url: url,
  method: 'GET',
})
.done(function(response) {
  console.log(response);
    var term = $(this).val();
    console.log(term);
  	var results = response.response.docs[0].keywords[0];
    console.log(results);

  })

});