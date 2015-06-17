$(document).on('ready', function() {

  // 1. Select all the links with any "href" attribute
  $('[href]');
  // 2. Select all the links to "http://www.facebook.com"
  $('a[href="http://www.facebook.com"]');
  // 3. Highlight all the links to any ".com" URL by setting their class to "highlight".
  $('a[href*=".com"]').attr('class', 'highlight');
  // 4. Hide all the links NOT to "http://www.google.com"
  $('a[href!="http://www.google.com"]').hide();
  
});