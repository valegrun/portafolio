$(function(){

$("a").click(function(event){
  if (this.hash !==""){
    event.preventDefault();
    var numeral = this.hash;
    $("html, body").animate({
      scrollTop: $(numeral).offset().top
    }, 800, function(){
      window.location.hash=numeral;

    });
  }
});

$('[data-toggle="popover"]').popover();

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
