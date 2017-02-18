$(document).ready(function() {
    var submitButton = 0;

  function randomPicture (){
    min = Math.ceil(1);
    max = Math.floor(14);
    var pictureNumber = Math.floor(Math.random() * (max - min)) + min;
    $('.sidetext').css('background-image', 'url(images/pic'+pictureNumber+'.jpg)');
    console.log(pictureNumber);
  }

    $('#submit').click(function(){
      randomPicture();
      var searchTerm = $('#input-person').val();
      listMessages('me', searchTerm, listMessageCallback);
       submitButton = submitButton + 1;
     $('.quote').remove();  
     $('#content').css('display', 'relative', 'bottom', '0');
    });
   
    function listMessages(userId, query, callback) {
      $('#content').css('left', $('sidetext'.offsetLeft));
      var getPageOfMessages = function(request, result) {
          request.execute(function(resp) {
            result = result.concat(resp.messages);
            // var nextPageToken = resp.nextPageToken;
            // if (nextPageToken) {
            //   request = gapi.client.gmail.users.messages.list({
            //     'userId': userId,
            //     'pageToken': nextPageToken,
            //     'q': query
            //   });
            //   getPageOfMessages(request, result);
            // } else {
              callback(result);
            })
          // });
        };

      var initialRequest = gapi.client.gmail.users.messages.list({
        'userId': userId,
        'q': query
          // 'q': 'older_than:1y'
      });

      getPageOfMessages(initialRequest, []);
    }
    
// this is where you change what is called back
    function listMessageCallback(result){
      console.log(result[0].id);
      var messageId = result[0].id;

      getMessage('me', messageId, getMessageCallback)

    }

    function getMessageCallback(result){
      console.log(result)
      $('#content').html(result.snippet);
      $('#content').css('font-size', '20px');
      // $('#content').app
    }

    function getMessage(userId, messageId, callback) {
      var request = gapi.client.gmail.users.messages.get({
        'userId': userId,
        'id': messageId,
        'nonce': Math.random()
      });
      request.execute(callback);
    }

  
  })

    



    