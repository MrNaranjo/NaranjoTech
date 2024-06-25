jQuery( document ).ready(function() { scrolled(); });
jQuery( document ).scroll(function() { scrolled(); });

function scrolled() {
  var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';
  var p = parseInt((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);

  jQuery('#read-progress').css("width", p + "%");
  jQuery('#read-progress').attr("aria-valuenow", p);
}