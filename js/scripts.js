$(document).ready(function() {



  function hideAll() {
  $('#wetdreamsTitle').hide();
  $('#whatitisTitle').hide();
  $('#onemillionTitle').hide();
  $('#gaythoughtsTitle').hide();
  }
hideAll();

$('.albumArt').click(function() {
hideAll();
  switch ($(this).attr("id")) {
    case "areyouin":
          $('#wetdreamsTitle').show();
  break;
    case "gaythoughts":
          $('#gaythoughtsTitle').show();
  break;
    case "hottropics":
          $('#whatitisTitle').show();
  break;
    case "hungatheart":
          $('#onemillionTitle').show();
  break;
      }

    $("audio").each(function() {
    this.pause();
    this.currentTime=0;
          });
    });

    $('#growlbio').hide();
    $('#growlpic').click(function() {
    $('#growlbio').slideToggle();
    });
  });
