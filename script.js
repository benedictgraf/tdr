//create firebase reference
var dbRef = new Firebase("https://ng-fire-try.firebaseio.com/");
var contactsRef = dbRef.child('contacts')
var tecRef = dbRef.child('tech')
var desRef = dbRef.child('design')
var worRef = dbRef.child('work')


$( "#btntest" ).click(function() {worRef.on("child_added", function(snap) {
  //console.log(snap.val())
    snap.forEach(function(childSnapshot) {
        var key = childSnapshot.key();
        var childData = childSnapshot.val();
        console.log(childData);
  
    //create divs from database-elements
    var card = document.createElement('div');
    card.setAttribute('class', 'linkprev');
    card.setAttribute('id', 'wor');    
    $('#content-list').prepend($(card));
    
    var cardtitle = document.createElement('div');
    cardtitle.setAttribute('class', 'cardtitle');
    cardtitle.innerHTML = childData;
    card.appendChild(cardtitle);
    
   var y =  document.getElementsByClassName("linkprev")
  for( var i = 0; i < y.length; i++){
   document.guteUrls.execute('')};
  
    });
  });

});

//load all contacts
contactsRef.on("child_added", function(snap) {
//console.log(snap.val())
  snap.forEach(function(childSnapshot) {
      var key = childSnapshot.key();
      var childData = childSnapshot.val();
      console.log(childData);

  //create divs from database-elements
  var card = document.createElement('div');
  card.setAttribute('class', 'linkprev');
  card.setAttribute('id', 'all');
  $('#content-list').prepend($(card));
  
  var cardtitle = document.createElement('div');
  cardtitle.setAttribute('class', 'cardtitle');
  cardtitle.innerHTML = childData;
  card.appendChild(cardtitle);
  
 var y =  document.getElementsByClassName("linkprev")
for( var i = 0; i < y.length; i++){
 document.guteUrls.execute('')};

  });
});

//load all contacts
tecRef.on("child_added", function(snap) {
  //console.log(snap.val())
    snap.forEach(function(childSnapshot) {
        var key = childSnapshot.key();
        var childData = childSnapshot.val();
        console.log(childData);
  
    //create divs from database-elements
    var card = document.createElement('div');
    card.setAttribute('class', 'linkprev');
    card.setAttribute('id', 'tec');    
    $('#content-list').prepend($(card));
    
    var cardtitle = document.createElement('div');
    cardtitle.setAttribute('class', 'cardtitle');
    cardtitle.innerHTML = childData;
    card.appendChild(cardtitle);
    
   var y =  document.getElementsByClassName("linkprev")
  for( var i = 0; i < y.length; i++){
   document.guteUrls.execute('')};
  
    });
  });

  //load all contacts
desRef.on("child_added", function(snap) {
  //console.log(snap.val())
    snap.forEach(function(childSnapshot) {
        var key = childSnapshot.key();
        var childData = childSnapshot.val();
        console.log(childData);
  
    //create divs from database-elements
    var card = document.createElement('div');
    card.setAttribute('class', 'linkprev');
    card.setAttribute('id', 'des');  
    $('#content-list').prepend($(card));
    
    var cardtitle = document.createElement('div');
    cardtitle.setAttribute('class', 'cardtitle');
    cardtitle.innerHTML = childData;
    card.appendChild(cardtitle);
    
   var y =  document.getElementsByClassName("linkprev")
  for( var i = 0; i < y.length; i++){
   document.guteUrls.execute('')};
  
    });
  });


  $('#btntest').on('click', function(){
    
        $("#all").toggle();
    });
  

  //load all contacts
  worRef.on("child_added", function(snap) {
  //console.log(snap.val())
    snap.forEach(function(childSnapshot) {
        var key = childSnapshot.key();
        var childData = childSnapshot.val();
        console.log(childData);
  
    //create divs from database-elements
    var card = document.createElement('div');
    card.setAttribute('class', 'linkprev');
    card.setAttribute('id', 'wor');    
    $('#content-list').prepend($(card));
    
    var cardtitle = document.createElement('div');
    cardtitle.setAttribute('class', 'cardtitle');
    cardtitle.innerHTML = childData;
    card.appendChild(cardtitle);
    
   var y =  document.getElementsByClassName("linkprev")
  for( var i = 0; i < y.length; i++){
   document.guteUrls.execute('')};
  
    });
  });

  
//change value of element with ID "filter" - checkbox
function check() {
  document.getElementById("filter").checked = true;
}

function uncheck() {
  document.getElementById("filter").checked = false;
}

//save contact
  //save in database contacts
document.querySelector(".addValue").addEventListener("click", function( event ) {  
  event.preventDefault();
  if( document.querySelector('#url').value != '' && document.querySelector('#url').value.charAt(0) == "h" && document.querySelector('#url').value.charAt(3) == "p" && document.querySelector('#f1').checked == true){
    contactsRef.push({
        name: document.querySelector('#url').value,})
      contactForm.reset();} 
    
      //save in database tech
  else if( document.querySelector('#url').value != '' && document.querySelector('#url').value.charAt(0) == "h" && document.querySelector('#url').value.charAt(3) == "p" && document.querySelector('#f2').checked == true){
    tecRef.push({
        name: document.querySelector('#url').value,})
      contactForm.reset();} 

        //save in database design
      else if( document.querySelector('#url').value != '' && document.querySelector('#url').value.charAt(0) == "h" && document.querySelector('#url').value.charAt(3) == "p" && document.querySelector('#f3').checked == true){
        desRef.push({
            name: document.querySelector('#url').value,})
          contactForm.reset();} 
       
          //save in database work
          else if( document.querySelector('#url').value != '' && document.querySelector('#url').value.charAt(0) == "h" && document.querySelector('#url').value.charAt(3) == "p" && document.querySelector('#f4').checked == true){
            worRef.push({
                name: document.querySelector('#url').value,})
              contactForm.reset();} 

  else {
    alert('Oops, seems like an error with the url-format. Just paste in from your browser with the "http" or "https"');
  }
}, false);

//prepare contact object's HTML
/*function contactHtmlFromObject(contact){
  console.log( contact );
     // resulting string
  var html = '';
    html += '<div class="abc">';
      html += '<a href='+contact.name+' class="lead">'+contact.name+'</a>';
    html += '</div>';
  return html;
}*/