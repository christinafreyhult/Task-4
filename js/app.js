//create variables for later use
var $overlay = $('<div class="overlay"><div>');
var $image = $("<img>");
var $text = $("<p></p>");
var $prevButton =$("<button><</button>");
var $nextButton =$("<button>></button>");

//add the selected image to the overlay
$overlay.append($prevButton);
$overlay.append($image);
$overlay.append($text);
$overlay.append($nextButton);

//add the overlay to the html
$("body").append($overlay);

//listen to the click, prevent normal opening of image
$(".gallery a").click(function(event){
    event.preventDefault();
    //get the link of the selected img and add to code
    var imgLink = $(this).attr("href");
    $image.attr("src", imgLink);
    
    //get the descriptive text and add to code
    var imgText = $(this).attr("alt");
    $text.text(imgText);
    console.log(imgText);
    
    //show the overlay
    $overlay.show();
});

//listen to button selection
$prevButton.click(function(event){
    event.preventDefault();
    console.log("Prev");
});

$overlay.click(function(){
    $overlay.hide();    
})