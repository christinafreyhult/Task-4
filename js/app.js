//filter any searched images using the HideSeek plugin    http://vdw.github.io/HideSeek/
$('#search').hideseek({
  attribute: 'data-alt'
});


//create variables for later use
var $overlay = $('<div id="overlay"><div>');
var imgLink;
var imgText;
var $image = $("<img>");
var $text = $("<p></p>");
var $prevButton = $('<button id="prev"><</button>');
var $nextButton = $('<button id="next">></button>');
var $index = 0;
var $galleryLength = $(".gallery li").length;

//add the overlay to the html
$("body").append($overlay);

//add the selected image, text and buttons to the overlay
$overlay.append($prevButton);
$overlay.append($image);
$overlay.append($nextButton);
$overlay.append($text);


//create function to set what image and text to be shown
function setImage(imgLocation, imgDesc){
    $image.attr("src", imgLocation)//set img source
    $text.text(imgDesc);//set text contents
}

//listen to the click from gallery
$(".gallery a").click(function(event){
    event.preventDefault();   //prevent normal opening of source image
    
    //get the link of the selected img and add to ovelay code
    imgLink = $(this).attr("href");
    $image.attr("src", imgLink);
        
    //get the descriptive text and add to code
    imgText = $(this).parent().attr("data-alt");
    $text.text(imgText);
    
    //get index of selected img
    $index = $(this).parent().index();

    //call on function to set current img in the lightbox
    setImage(imgLink, imgText);
    
    //show the overlay
    $overlay.show();
});

//create function to fetch the previous image (if any)
function prevImg(){
    if($index!=0){$index--;} // if img not at first img, set index to one less
    
    //get object from new index
    var newImgLink = $(".gallery li").get($index).getElementsByTagName("a");

    //get new link and text
    imgLink = $(newImgLink).attr("href");
    imgText = $(newImgLink).parent().attr("data-alt");
    
    setImage(imgLink,imgText);
}

//create function to fetch the next image (if any)
function nextImg(){
    if($index!= $galleryLength){$index++;} // if img not at last img, set index to one more
    
    //get object from new index
    var newImgLink = $(".gallery li").get($index).getElementsByTagName("a");

    //get new link and text
    imgLink = $(newImgLink).attr("href");
    imgText = $(newImgLink).parent().attr("data-alt");
    
    setImage(imgLink,imgText);
}

//listen to prev button selection
$prevButton.click(function(event){
    prevImg();   
});

$nextButton.click(function(event){
    nextImg();
});

// close the overlay if selection anywhere on the overlay 
$overlay.click(function(event){
    
    if(event.target.id == "overlay"){
        console.log("Overlay closed");
        $overlay.hide();    
    }
})