//create firebase reference
var dbRef = new Firebase("https://ng-fire-try.firebaseio.com/");
var contactsRef = dbRef.child('contacts')
var tecRef = dbRef.child('tech')
var desRef = dbRef.child('design')
var worRef = dbRef.child('work')

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
  $('#content-list').prepend($(card));
  
  var cardtitle = document.createElement('div');
  cardtitle.setAttribute('class', 'cardtitle');
  cardtitle.innerHTML = childData;
  card.appendChild(cardtitle);
  
 var y =  document.getElementsByClassName("linkprev")
for( var i = 0; i < y.length; i++){
 document.guteUrls.execute('')};
  
var m = child.length;
  console.log(m);
  
  
  //LoadPreview(childData);
  //var count = $('#content-list').children().length;
  //console.log(count);

  
//console.log(event);


//linkify plugin to convert div-elements (strings) to hyperlinks
/*
$('div').linkify();
 $('#sidebar').linkify({
     target: "_blank"
 }); 
*/

  });
});

//save contact
function check() {
  document.getElementById("filter").checked = true;
}

function uncheck() {
  document.getElementById("filter").checked = false;
}


document.querySelector(".addValue").addEventListener("click", function( event ) {  
  event.preventDefault();
  if( document.querySelector('#url').value != '' && document.querySelector('#url').value.charAt(0) == "h" && document.querySelector('#url').value.charAt(3) == "p" && document.querySelector('#f1').checked == true){
    contactsRef.push({
        name: document.querySelector('#url').value,})
      contactForm.reset();} 
  
  else if( document.querySelector('#url').value != '' && document.querySelector('#url').value.charAt(0) == "h" && document.querySelector('#url').value.charAt(3) == "p" && document.querySelector('#f2').checked == true){
    tecRef.push({
        name: document.querySelector('#url').value,})
      contactForm.reset();} 

      else if( document.querySelector('#url').value != '' && document.querySelector('#url').value.charAt(0) == "h" && document.querySelector('#url').value.charAt(3) == "p" && document.querySelector('#f3').checked == true){
        desRef.push({
            name: document.querySelector('#url').value,})
          contactForm.reset();} 

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