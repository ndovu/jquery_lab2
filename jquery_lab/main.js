$(document).on('ready', function() {
  // do_this is simply a marker so it is easy to see what exr needs to
  // be done.
  var do_this = undefined;


  // # ATTRIBUTE SELECTORS
  // 1. Select all the links with any "href" attribute
  // $('[href]');

  // 2. Select all the links to "http://www.facebook.com"
  // $('a[href="http://www.facebook.com"]');

  // 3. Highlight all the links to any ".com" URL by setting their class to "highlight".
  // $('a[href*=".com"]').attr('class', 'highlight');

  // 4. Hide all the links NOT to "http://www.google.com"
  // $('a[href!="http://www.google.com"]').hide();

  // # PSEUDO SELECTORS
  // 1. Select the first table row
  // $('tr:first-child');
  
  // 2. Select the last table row
  // $('tr:last-child');
  
  // 3. Remove the even-numbered shapes from the green container
  // $('#green-container .shape:even').remove();
  
  // 4. Highlight the odd rows on the table
  // $('#green-container .shape:odd').attr('class', 'highlight');
  
  // 5. Hide the last shape in every container
  // $('.container .shape:last-child').hide();

  // # ATTRIBUTES
  // 1. Add the "highlight" class to all links
  // $('[href]').addClass('highlight');
  
  // 2. Remove the "highlight" class from all links
  // $('[href]').removeClass('highlight');
  
  // 3. Toggle the "highlight" class on all links. Toggle again.
  // $('[href]').toggleClass('highlight');
  
  // 4. Add the "my-own-class" class to the "body" element. Then verify it is there using "hasClass".  
  // $('body').addClass('my-own-class');
  // $('body').hasClass('my-own-class');

  // 1. When any container is clicked, add the "highlight" class to all the shapes in that container.
  // $('.container').on('click', function() {
  //   $(this).children().addClass('highlight');
  // });
  
  // 2. When your mouse enters a shape, toggle the "highlight" class.
  // $('.shape').on('mouseenter', function() {
  //   $(this).toggleClass('highlight');
  // });
  
  // 3. __Shrink Ray:__ When any shape is clicked do the following:
  //   - If the shape has the "small" class, hide it.
  //   - If it has the "medium" class, remove the "medium" class and add the "small" class.
  //   - If it has the "large" class, remove the "large" class and add the "medium class."  
  // var shrinkRay = function(shape) {
  //   console.log('shrinkRay function entered');
  //   if (shape.hasClass('small')) {
  //     // hide
  //     shape.hide();
  //   } else if (shape.hasClass('medium')) {
  //     // make small
  //     shape.removeClass('medium').addClass('small');
  //   } else if (shape.hasClass('large')) {
  //     // make medium
  //     shape.removeClass('large').addClass('medium');
  //   } else {
  //     // do nothing
  //   };
  // };

  // $('.shape').on('click', function() {
  //   shape = $(this);
  //   shrinkRay(shape);
  // });

  // Alternate Solution
  // $('.shape').on('click', function() {
  //   console.log('thing2');
  //   shape = $(this);
  //   if (shape.hasClass('small')) {
  //     shape.hide();
  //   } else if (shape.hasClass('medium')) {
  //     shape.removeClass('medium').addClass('small');
  //   } else if (shape.hasClass('large')) {
  //     shape.removeClass('large').addClass('medium');
  //   } else {
  //     // do nothing
  //   };  
  // });

  // # CHAINING
  // 1. Change the colour of all blue shapes to red, using one line of code.
  // $('.shape[class*="blue"]').removeClass('blue').addClass('red');

  // 2. Change all the small red circles into large grey squares, using one line of code.
  // $('.small.red.circle').removeClass('small red circle').addClass('large grey square');

  // 3. Simplify your Shrink Ray using chaining.
  // Already done above.

  // # 'val'
  // 1. Set the value of the text field in the form to "Hello World"
  // $('#form-1 [type="text"]').val('Hello World');

  // 2. Get the value of the text field in the form
  // $('#form-1 [type="text"]').val();

  // 3. When the form's "Submit" button is clicked, change the contents of "Form Message" to be the text field's value.
  // $('#form-1 [type="submit"]').on('click', function() {
  //   message = $('#form-1 [type="text"]').val();
  //   $('#form-message').html(message);
  //   // reset the message form input
  //   $('#form-1 [type="text"]').val('');
  // });

  // # MANIPULATION
  // 1. Append a "p" tag containing "Appended" to the "body" element.
  // $('body').append('<p>Appended</p>');
  
  // 2. Prepend a "p" tag containing "Prepended" to the "body" tag.
  // $('body').prepend('<p>Prepended<p>');

  // 3. Append a new list item to the List, containing a link to link Amazon.com.
  // $('ul').append('<li><a href="http://www.amazon.com">Amazon</a></li>');

  // 4. Prepend a row to the table with the columns "0" and "-"
  // $('tbody').prepend('<tr><td>0</td><td>-</td></tr>');

  // 5. When the form's submit button is clicked, append the text input's current value to the form message.
  // $('#form-1 [type="submit"]').on('click', function() {
  //   message = $('#form-1 [type="text"]').val();
  //   $('#form-message').append('<br>' + message);
  //   $('#form-1 [type="text"]').val('');
  // });
  
  // # TRAVERSAL
  // 1. Select all the red shapes in the orange container, using "find".
  // $('#orange-container').find($('.red.shape'));

  // 2. Remove all the shapes just before a small red circle.
  // $('.small.red.circle').prev().remove();

  // 3. Hide all shapes just after any grey shape.
  // $('.shape.grey').next().hide();

  // 4. Make all the circles in the green container black, using "find".
  // $('#green-container').find($('.circle')).removeClass('blue red').addClass('black');

  // # EFFECTS
  // 1. Toggle the green container.
  // $('#green-container').toggle();

  // 2. Toggle the green container again.
  // $('#green-container').toggle();  
  
  // 3. Fade the green container out.
  // $('#green-container').fadeOut();
  
  // 4. Fade the green container in.
  // $('#green-container').fadeIn();

  // 5. Slide the green container up.
  // $('#green-container').slideUp();
  
  // 6. Slide the green container down.  
  // $('#green-container').slideDown();
  
  // 1. When "Button 1" is clicked, toggle the green container.
  // $('#button-1').on('click', function(){
  //   $('#green-container').toggle();
  // });
  
  // 2. When "Button 2" is clicked, fade the "Button Message" out
  // $('#button-2').on('click', function(){
  //   $('#button-message').fadeOut();
  // });
  
  // 3. When "Button 3" is clicked, fade the "Button Message" back in.
  // $('#button-3').on('click', function(){
  //   $('#button-message').fadeIn();
  // });

  // 4. When "Button 4" is clicked, slide the green container up.
  // $('#button-4').on('click', function() {
  //   $('#green-container').slideUp();
  // });

  // # EVENTS
  // 1. When the 'b' key is pressed, toggle all (b)lue shapes.
  // 2. When the 'r' key is pressed, toggle all (r)ed shapes.
  // 3. When the 'k' key is pressed, toggle all blac(k) shapes.
  // 4. When the 'g' key is pressed, toggle all (g)ray shapes.
  // 5. When the spacebar key is pressed, append a small blue circle to the green container.
  // $(document).on('keypress', function() {
  //   var charcode = event.which;
  //   if (event.which == 32) {
  //     event.preventDefault();
  //   }
  //   // console.log(charcode); // check the charcode of input
  //   var key = String.fromCharCode(charcode);
  //   var shape_circle_small_blue_html =  '<div class="small blue circle shape"></div>';
  //   if (key == 'b') {
  //     $('.shape.blue').toggle();  
  //   } else if (key == 'r') {
  //     $('.shape.red').toggle();  
  //   } else if (key == 'k') {
  //     $('.shape.black').toggle();  
  //   } else if (key == ' ') {
  //     $('#green-container').append(shape_circle_small_blue_html);
  //   } else {
  //     console.log('Key pressed: ' + key);
  //   }
  // });
  
  // 1. As you type in the text input, change the "Form Message" to be the same as what you type.
  // $('#form-1 [type="text"]').on('keypress', function() {
  //   $('#form-message').html($(this).val());
  // });

  // $('#form-1 [type="text"]').on('keyup', function() {
  //   $('#form-message').html($(this).val());
  // });
  
  // 2. As you type in the text input, change the "Form Message" to be the REVERSE of what you type.
  // explanation of this function here http://repl.it/tBA/3
  // function reverse(string) {
  //   return string.split("").reverse().join("");
  // };

  // $('#form-1 [type="text"]').on('keypress', function() {
  //   var message = $(this).val();
  //   $('#form-message').html(reverse(message));
  // });

  // $('#form-1 [type="text"]').on('keyup', function() {
  //   var message = $(this).val();
  //   $('#form-message').html(reverse(message));
  // });

  // 3. Make the "Form Message" show the number of characters remaining (14 characters maximum) as you type in the text input. (e.g. "3 characters remaining").
  // set form message initial condition
  // $('#form-message').html('14 characters remaining.');

  // $('#form-1 [type="text"]').on('keypress', function() {
  //   var message = $(this).val();
  //   $('#form-message').html((14 - message.length) + ' characters remaining.');
  // });

  // $('#form-1 [type="text"]').on('keyup', function() {
  //   var message = $(this).val();
  //   $('#form-message').html((14 - message.length) + ' characters remaining.');
  // });
  
  // 1. When the form is submitted, clear the text in the input field.
  // $('#form-1 [type="submit"]').click(function(event) {
  //   event.preventDefault();
  //   $('#form-message').html('14 characters remaining');
  //   $('#form-1 [type="text"]').val('');
  // });

  // 2. __Shape Destroyer:__ The user can enter a color into the input field. When they click "submit":
  //   - All shapes matching the given color should be removed.
  //   - If they enter an invalid color show them an alert message telling them this.
  //   - Clear the input field.
  // $('#form-1').on('submit', function() {
  //   var color = $('input[type="text"]').val();
  //   $('input[type="text"]').val('')
  //   $('input[type="text"]').focus()
  //   $('.shape.' + color).remove();
  // });

  // # EVENT BUBBLING
  // 1. When a black square is clicked log "Black Square Clicked" to the console.
  // $('.black.square').click(function(){console.log('black square clicked'); });

  // 2. When the orange container is clicked log "Orange Container Clicked"
  // $('#orange-container').click(function(){console.log('orange container clicked');});  

  // 3. Click the black square in the orange container.
  // okay...

  // 4. What happened? Why?  
  // both 'black square clicked' and 'orange container clicked' appear in the console log... cause you know, event bubbling.
  
  // 1. Add `event.stopPropagation()` to the black square's click handler.
  // $('.black.square').click(function(event){console.log('black square clicked'); event.stopPropagation();});

  // 2. What happens when you click the black square now?
  // only 'black square clicked' is logged in the console

  // 3. What happens when you click the orange container OUTSIDE the black square?
  // only 'orange container clicked' is logged in the console

  // # DEFAULT ACTION
  // 1. When a link is clicked, log to the console "Link Clicked"
  // $('a').click(function() {
  //   console.log('link clicked');
  // });
  
  // 2. What happens when you click a link? Why?
  // the link is followed

  // - Add `event.preventDefault()` to your link click handler.
  // $('a').click(function() {
  //   var url = $(this).attr('href');
  //   console.log(url);
  //   event.preventDefault();
  // });

  // - What happens when you click a link now?  
  // the link is not followed and the click is logged.

  // # DELEGATED EVENTS
  // 1. Set a delegated click handler on the orange container so that red shapes are removed when you click them.
  // $('#orange-container').click(function() {
  //   $('.shape.red').remove();
  // });

  // let button 4 create red shapes so that we can destroy them and 
  // make sure the delegated event works as expected.
  // $('#button-4').click(function() {
  //   $('#orange-container').append('<div class="medium red diamond shape"></div>');
  // });

  // # RESOURCES
  // - http://api.jquery.com/
  // - http://overapi.com/jquery/
  // - http://woorkup.com/wp-content/uploads/2011/12/jQuery-17-Visual-Cheat-Sheet1.pdf
  // - http://learn.jquery.com (core, events, ajax)
});