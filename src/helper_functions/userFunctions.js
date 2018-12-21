

function getArt() {
  console.log('getArt');
  return fetch("http://localhost:3005/user/1/getSuggestedArt/5")
}



// fetch('http://localhost:3005/user/1/getSuggestedArt/5')
// .then(
//    function(response) {
//      if (response.status !== 200) {
//        console.log('Looks like there was a problem. Status Code: ' +
//          response.status);
//        return;
//      }
//
//      // Examine the text in the response
//      response.json().then(function(data) {
//        console.log(data);
//      });
//    }
//  )
//  .catch(function(err) {
//    console.log('Fetch Error :-S', err);
//  });
