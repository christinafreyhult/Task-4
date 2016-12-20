//filter any searched images
$('#search').hideseek({
  attribute: 'data-alt'
});

//create variables for later use
var $overlay = $('<div class="overlay"><div>');
//var $prevImage = $("<img>");
var $image = $("<img>");
//var $nextImage = $("<img>");
var $text = $("<p></p>");
var $prevButton =$('<button id="prev"><</button>');
var $nextButton =$('<button id="next">></button>');

//add the selected image to the overlay
$overlay.append($prevButton);
$overlay.append($image);
$overlay.append($nextButton);
$overlay.append($text);


//add the overlay to the html
$("body").append($overlay);

//listen to the click, 
$(".gallery a").click(function(event){
    event.preventDefault();   //prevent normal opening of source image
    
    //get the link of the selected img and add to ovelay code
    var imgLink = $(this).attr("href");
    $image.attr("src", imgLink);
    
    //get the descriptive text and add to code
    var imgText = $(this).parent().attr("data-alt");
    var nextLink = $(this).parent().next().children().attr("href");
    var nextDisplay = $(this).parent().next().children().css("display");
    $text.text(imgText);
    console.log("current pic is " + imgText); //testing purpose, print the current text
    console.log("next link is " + nextLink); //testing purpose, print the current text
    console.log("next display value is " + nextDisplay); //testing puspose, print the link of next image
    
    //var tryNext = $(this).parent().next()//do a step to the next element, fetch style attr      style="display: none;"
    //while style attr not found, 
    //go to next li element
    //then get link to correct element
    
    //show the overlay
    $overlay.show();
});

//listen to button selection
$prevButton.click(function(event){
    //prevent overlay from closing on button click
    event.preventDefault();
    console.log("Prev");
    //get link to prev img
    
    //set button link to prev img
});

$overlay.click(function(){
    $overlay.hide();    
})