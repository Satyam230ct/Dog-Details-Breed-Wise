var breedImage=$("#breed-image");
var dropdown=$("#dog-breeds");
var allowSubmit=true;
var breed;

// Adding element in option list from api call
$.get("https://dog.ceo/api/breeds/list/all",function(data,status){
    // if(status=="success"){
        let dogBreeds=data.message;
        for(let breed in dogBreeds){
            dropdown.append('<option value="'+breed+'">'+breed+'</option>'); // adding list in select option
        }
    // }
    // else
    // alert("Api call Fail!");    
});

dropdown.change(function(){
    allowSubmit=true;
});

$("form button").click(function(e){
    e.preventDefault();
    if(allowSubmit){
        breed=dropdown.val();
        displayDog(breed);
        allowSubmit=false;
    }
});

$("#next a").click(function(e){
    e.preventDefault();
    if(breed!=undefined){
        displayDog(breed);
    }
});

function displayDog(breed){
    let url="https://dog.ceo/api/breed/" + breed + "/images/random"; // Here we have fetch the all the images url of that breed
    $("#breed-image img").remove();
    // Time to fetch image from the breed url
    $.get(url,function(data,status){
        let imageUrl=data.message;
        breedImage.append('<img src="' + imageUrl + '" alt="'+breed+'">');
    });
}



