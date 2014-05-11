

document.addEventListener("deviceready", function () {

});

$(document).on('pageshow', '#Page1', function (data) {
    
    

        $("#page1_login").hover(
  function () {

      //Jquery UI - Moving the divs
      $('#page1_login').animate({
          marginTop: '-380px'
      }, {
          duration: 800,
          specialEasing: {
              marginTop: 'easeOutBounce'
          },

          complete: function () {
              cafedetailviewexpand = "true";
              $("#cafeandgiftshop_detailview").fadeIn("slow");
              $("#scrollcontent_button").fadeIn("slow");
          }
      });


  }, function () {
      //Jquery UI - Moving the divs
      $('#page1_login').animate({
          marginTop: '-445px'
      }, {
          duration: 800,
          specialEasing: {
              marginTop: 'easeOutBounce'
          },

          complete: function () {
              cafedetailviewexpand = "true";
              $("#cafeandgiftshop_detailview").fadeIn("slow");
              $("#scrollcontent_button").fadeIn("slow");
          }
      });
  }
);


       

        
  

  

});



