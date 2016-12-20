//filter any searched images
$('#search').hideseek({
  attribute: 'data-alt'
});


//create variables for later use
var $overlay = $('<div class="overlay"><div>');
var imgLink;
var $image = $("<img>");
var $text = $("<p></p>");
var prevObject;
var nextObject;
var $prevButton =$('<button id="prev"><</button>');
var $nextButton =$('<button id="next">></button>');

//add the selected image, text and buttons to the overlay
$overlay.append($prevButton);
$overlay.append($image);
$overlay.append($nextButton);
$overlay.append($text);

//add the overlay to the html
$("body").append($overlay);


//listen to the click from gallery
$(".gallery a").click(function(event){
    event.preventDefault();   //prevent normal opening of source image
    
    //get the link of the selected img and add to ovelay code
    imgLink = $(this).attr("href");
    $image.attr("src", imgLink);
        
    //get the descriptive text and add to code
    imgText = $(this).parent().attr("data-alt");
    $text.text(imgText);
    
    //get the next and prev object
    prevObject = $(this).parent().prev().children();
    nextObject = $(this).parent().next().children();

    //show the overlay
    $overlay.show();
});


//listen to prev button selection
$prevButton.click(function(event){
   console.log("Previous selected"); //test that button was selected
    event.preventDefault();   //prevent overlay from closing
    
    imgLink = prevObject.attr("href"); //set prev obj link as the current obj link
    $image.attr("src", imgLink);
     
    imgText = prevObject.parent().attr("data-alt"); //get the descriptive text and add to code
    $text.text(imgText);
    
    console.log("New current img is " + imgLink + " with desc: " + imgText); //test that current obj has new values
    
    nextObject = prevObject.parent().next().children(); //set new values
    prevObject = prevObject.parent().prev().children(); //set new values
    
    
    //show the overlay
    $overlay.show();
});

// close the overlay if selection anywhere
$overlay.click(function(){
    $overlay.hide();    
})