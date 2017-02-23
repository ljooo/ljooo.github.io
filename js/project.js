
$('h1').typeIt({
     strings: ["This is how we remember.", "This is how we forget."],
     speed: 50,
     breakLines: false,
});


$(document).ready(function() {
    var submitButton = 0;
    var searchTerm;
    var messagesResult;
    var messagesResultMessageToSearch = 0;
    var listMessagesResult;

  function randomPicture (){
    min = Math.ceil(1);
    max = Math.floor(16);
    var pictureNumber = Math.floor(Math.random() * (max - min)) + min;
    $('.sidetext').css('background-image', 'url(images/pic'+pictureNumber+'.jpg)');
    // console.log(pictureNumber);
  }

    $('#submit').click(function(){
      randomPicture();
      var searchOne = $('#input-person').val();
      // var searchTwo = $('#input-place').val();
      searchTerm = searchOne 
      listMessages('me', searchTerm, listMessageCallback);
       submitButton = submitButton + 1;
     $('.quote').remove();  
  
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
        'q': query + '+' + searchTerm + ' ->' + '  -unsubscribe' + ' -account' +  ' -track' + ' older_than:2yr' 
      });

      getPageOfMessages(initialRequest,[]);
    }
    
    function listMessageCallback(result){
      // console.log(result[0].id);
      listMessagesResult = result;
      var messageId = result[messagesResultMessageToSearch].id;
      getMessage('me', messageId, getMessageCallback)

    }

    function getMessage(userId, messageId, callback) {
      var request = gapi.client.gmail.users.messages.get({
        'userId': userId,
        'id': messageId,
        'format': 'full',
        'nonce': Math.random()
      });
      request.execute(callback);
    }

    function getMessageCallback(result){
      console.log(result.payload);

      if (!result.payload.parts[0].body.data) {

         messagesResultMessageToSearch += 1;

         var messageId = listMessagesResult[messagesResultMessageToSearch].id;
         getMessage('me', messageId, getMessageCallback) 

      } else {
        var messageBody = atob(result.payload.parts[0].body.data.replace(/-/g, '+').replace(/_/g, '/') );
     
        console.log(messageBody);
        var searchTermPosition = messageBody.search(searchTerm);

        if (searchTermPosition < 0) {
           messagesResultMessageToSearch += 1;

           var messageId = listMessagesResult[messagesResultMessageToSearch].id;
           getMessage('me', messageId, getMessageCallback) 

        } else {
          var messageBodySubstring = messageBody.slice(searchTermPosition-50, searchTermPosition+50);

          console.log(messageBodySubstring);
          console.log(searchTermPosition);
          // $('#content').css('font-size', '20px');
          // $('#content').css('bottom-margin', '0');
          // $('#content').app

          $('#content').html('[' + messageBodySubstring + ']');
        }
      }
    }  
  })

    



    