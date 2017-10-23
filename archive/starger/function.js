 $(document).ready(function(){
  
  var menu = $(".menu");
  var hamburger = $(".hamburger");
  var line = $(".line");
  var menuOpen;
  
  function openMenu(){
    menu.css("left", "0px" ,  "320px");
    line.css("background", "#fff" ,  "320px");
    menuOpen = true;
  }
  
  function closeMenu(){
    menu.css("left", "-320px");
    line.css("background", "#fff", );
    menuOpen = false;
  }
  
  function toggleMenu(){
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  
  hamburger.on({
    click: function(){
      toggleMenu();
    }
  })
  
  

});