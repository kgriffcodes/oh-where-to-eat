/*************************
RANDOM RESTAURANT GENERATOR
*************************/

const button = document.getElementById("spinTheWheel");
button.addEventListener("click", randomRestaurant);

function paintHtml(type, img, sentence) {
    //hide intro text
    const explanText = document.getElementById("intro-text");
    //show result text
    const result = document.getElementById("result");
    const imageElement = document.getElementById("dynamic-img");
    const caption = document.getElementById("caption");
    //change html
    explanText.classList.add("hidden");
    result.innerHTML = sentence;
    imageElement.src = img;
    return;
}

function randomRestaurant(e) {
    let choice = Math.round(Math.random() * 14);
    let image; //reassign this value in Switch case
    let type = "";
    let foodDetails;

    switch (choice) {
        case 0:
            type = "Indian";
            image = "img/indian-food-pic.jpg";
            foodDetails = "Maybe some Indian?";
            caption = "Photo by Lai YuChing on Unsplash";
            console.log(type);
            break;
        case 1:
            type = "Italian";
            image = "img/italian-food-pic.jpg";
            foodDetails = "How about some Italian?";
            caption = "Photo by Pablo Marchán Montes on Unsplash";
            console.log(type);
            break;
        case 2:
            type = "Pub Grub";
            image = "img/wings-burgers-food-pic.jpg";
            foodDetails = "There's nothing better than some pub grub!";
            caption = "Photo by Davey Gravy on Unsplash";
            console.log(type);
            break;
        case 3:
            type = "Mexican";
            image = "img/mexican-food-pic.jpg";
            foodDetails = "You can't beat good Mexican food.";
            caption = "Photo by Randy Fath on Unsplash";
            console.log(type);
            break;
        case 4:
            type = "Chinese";
            image = "img/chinese-food-pic.jpg";
            foodDetails =
                "Tonight might be the night for some Chinese takeout.";
            caption = "Photo by Debbie Tea on Unsplash";
            console.log(type);
            break;
        case 5:
            type = "Japanese";
            image = "img/japanese-food-pic.jpg";
            foodDetails = "You can't beat good Japanese food.";
            caption = "Photo by Jakub Dziubak on Unsplash";
            console.log(type);
            break;
        case 6:
            type = "Thai Restaurant";
            image = "img/thai-food-pic.jpg";
            foodDetails =
                "Did you say you wanted Thai? Or did I just read your mind?";
            caption = "Photo by DIE GRIECHEN on Unsplash";
            console.log(type);
            break;
        case 7:
            type = "Fast Food Restaurant";
            image = "img/fast-food-pic.jpg";
            foodDetails =
                "Let's be honest Fast food could hit the spot right now.";
            caption = "Photo by Ashley Green on Unsplash";
            console.log(type);
            break;
        case 8:
            type = "Barbeque";
            image = "img/barbeque-food-pic.jpg";
            foodDetails =
                "You'd better grab some napkins, because I see barbeque in your future.";
            caption = "Photo by Jon Tyson on Unsplash";
            console.log(type);
            break;
        case 9:
            type = "Soul Food";
            image = "img/soul-food-pic.jpg";
            foodDetails = "You can't beat Soul food.";
            caption = "Photo by Jodie Morgan on Unsplash";
            console.log(type);
            break;
        case 10:
            type = "Jamaican Restaurant";
            image = "img/jamaican-food-pic.jpg";
            foodDetails = "Ready for a flavor explosion? How about Jamaican?";
            image = "img/jamaican-food-pic.jpg";
            caption = "Photo by Ronise daluz on Unsplash";
            console.log(type);
            break;
        case 11:
            type = "Mediterranean Restaurant";
            image = "img/mediterranean-food-pic.jpg";
            foodDetails =
                "Do I smell lemon and oregano? Or am I just getting Mediterranean food vibes from you?";
            caption = "Photo by Mor Shani on Unsplash";
            console.log(type);
            break;
        case 12:
            type = "Breakfast Restaurant";
            image = "img/breakfast-food-pic.jpg";
            foodDetails =
                "No matter the hour, it's breakfast o'clock somewhere!";
            caption = "Photo by Rachel Park on Unsplash";
            console.log(type);
            break;
        case 13:
            type = "Deli";
            image = "img/deli-food-pic.jpg";
            foodDetails = "Nothing beats a good Deli Sandwich.";
            caption = "Photo by Pille R. Priske on Unsplash";
            console.log(type);
            break;
        case 14:
            type = "Dessert Restaurant";
            image = "img/dessert-food-pic.jpg";
            foodDetails = "You're so sweet. Get some Dessert to match.";
            caption = "Photo by @rachel_lee_creative on Unsplash";
            console.log(type);
            break;
        default:
            console.log("err");
    }
    paintHtml(type, image, foodDetails);
    button.innerText = "Let's try something else";
}

let locale = "chicago";
// make sure food type can be a global variable

/* /*************************
// YELP INTEGRATION
// *************************/
//make sure to add a line so that getFetch is run on click

// function getFetch(){
//   const choice =
//   const locale =
//   // const term = type;
//   const url = `https://api.yelp.com/v3/businesses/search?term=${type}&location=${locale}`

// fetch(url)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => console.log(data));

// term 	string = type

// location 	string = user's location

// }

/* /*************************
// GOOGLE MAP INTEGRATION
// *************************/
//
function initMap() {
    var location = {
        lat: 41.881832,
        lng: -87.623177,
    };
    var options = {
        center: location,
        zoom: 9,
    };
    if (navigator.geolocation) {
        console.log("geolocation is here");

        navigator.geolocation.getCurrentPosition(
            (loc) => {
                location.lat = loc.coords.latitude;
                location.lng = loc.coords.longitude;

                //Write the map
                map = new google.maps.Map(
                    document.getElementById("map"),
                    options
                );
            },
            (err) => {
                console.log("User clicked no");
                map = new google.maps.Map(
                    document.getElementById("map"),
                    options
                );
            }
        );
    } else {
        console.log("geolocation is not supported");
        map = new google.maps.Map(document.getElementById("map"), options);
    }

    autocomplete = new google.maps.places.Autocomplete(restaurantGenre, {
        componentRestrictions: { country: ["us"] },
        fields: ["geometry", "name"],
        types: ["establishment"],
    });

    autocomplete
        .addListener("__whatEverEventTriggersThis--place-changed??__", () => {
            const place = autocomplete.getPlace();
            new google.maps.Marker({
                position: place.geometry.location,
                title: place.name,
                map: map,
            });
        })
        .catch(function () {
            console.log("Promise Rejected");
        });
}
