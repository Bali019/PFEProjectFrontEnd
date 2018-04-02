/**
 * Created by Majdi Bali on 02/04/2018.
 */
$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    //Check screen size
    // If screen size bigger then 768px hideButton is visible
    if ($('#hideButton').is(':visible')){
      // If sidebar is fully activated and visible make sidebar small with active class
      if ($('#sidebar').hasClass('full-active') && !$('#sidebar').hasClass('hidden-full-active')){
        $('#sidebar').removeClass('full-active').addClass('active');
        return;
      }// If sidebar is fully activated but not visible remove hidden-full-active class
      else if ($('#sidebar').hasClass('full-active') && $('#sidebar').hasClass('hidden-full-active')){
        $('#sidebar').removeClass('hidden-full-active');
        $('#hideButton').toggleClass('ar-btn-active');
        return;
      }
      // If sidebar is activated and visible make sidebar bigger with full-active class
      if ($('#sidebar').hasClass('active') && !$('#sidebar').hasClass('hidden-active')){
        $('#sidebar').removeClass('active').addClass('full-active');
        return;
      }//Sidebar is activated but not visible remove hidden-active class
      else{
        $('#sidebar').removeClass('hidden-active');
        $('#hideButton').toggleClass('ar-btn-active');
        return;
      }
    }// If screen size lower than 768px
    else{
      // If sidebar is fully activated and visible make sidebar small with active class
      if ($('#sidebar').hasClass('full-active') && !$('#sidebar').hasClass('hidden-full-active')){
        $('#sidebar').removeClass('full-active').addClass('active');
        $('#sidebar').toggleClass('hidden-active');
        return;
      }// If sidebar is fully activated but not visible remove hidden-full-active class
      else if ($('#sidebar').hasClass('full-active') && $('#sidebar').hasClass('hidden-full-active')){
        $('#sidebar').removeClass('full-active').addClass('active');
        $('#sidebar').removeClass('hidden-full-active');
        return;
      }
      //sidebar is active and visible then hide sidebar
      if ($('#sidebar').hasClass('active')){
        $('#sidebar').toggleClass('hidden-active');
      }
    }
  });
  //HideMenu Function
  $('#sidebarHide').on('click', function () {
    // $('#sidebar').toggleClass('active');
    if ($('#sidebar').hasClass('full-active')) {
      $('#sidebar').toggleClass('hidden-full-active');
      $('#hideButton').toggleClass('ar-btn-active');
    }
    else if ($('#sidebar').hasClass('active')) {
      $('#sidebar').toggleClass('hidden-active');
      $('#hideButton').toggleClass('ar-btn-active');
    }
  });
});
