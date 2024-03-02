
    function ClearForm(){
      document.getElementById("contactForm").reset();
    }
  
    function hidePTags(){
      let ptags = document.getElementsByTagName('p');
      for(let item of ptags){
         // item.style.visibility = 'hidden'; // remove element, leaves space
         item.style.display = 'none'; // remove element and space
      }
  }
  $('#jqueryBtn').click(function(){
   $('p').hide();
  })