//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Change the color of an element using .style
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const accordion = document.querySelector('.accordion-body')
accordion.style.background = "#def7ff"
/* FOR ALL ACCORDIANS: In that case you have to use queryselectorAll and then apply the style with a foreach and create a function.
There is an example on the class files where that happens. Look for the queryselectorAll. */

 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Change the font size of an element using .setProperty
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const accordion = document.querySelector('.accordion-body')
accordion.setProperty.fontSize = "small" */

//FROM STUDY GUIDE
const font1 = document.getElementById("body1")
font1.style.setProperty('font-size', '1.3rem')


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Add a class to an HTML tag with .setAttribute, and change some property with that class.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const titleSelection = document.querySelector("#SelectMe")
console.log(titleSelection)
titleSelection.setAttribute('class', 'HenriName')

titleSelection.style.setProperty('color', 'green')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Create an empty paragraph and add some content with Javascript.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const NewParagraphStyle = document.querySelector("#replaceMe")
console.log(NewParagraphStyle)
NewParagraphStyle.innerHTML = " Matisse’s work in the 1910s is all about bright, expressive color and planes of color with a particular attention to line. When Fauvism fades, he’s well on his way, continuing to absorb the visual language of Primitivism and African art, and travelling far and wide — from Algiers to Spain and Morocco. In many quarters, his art is well received. Art critic Guillaume Apollinaire calls his work “eminently reasonable” and he is part of the major artistic movement taking place in Paris during the time. Many of his most famous works are produced during this era. But simultaneous to painting masterpieces like La Danse, Matisse is also forced to deal with critical scorn, difficulty selling his work and, at the Armory Show in Chicago in 1913, having his painting, Nu bleu, burned in protest."

NewParagraphStyle.style.setProperty('font-family', 'Montserrat')
NewParagraphStyle.style.setProperty('font-weight', '300')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Create an array and display the content on the page.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myArrayLong = [
    "1. Matisse worked as a court administrator",
    "2. Sickness brought a turnaround in Henri Matisse’s career",
    "3. He had a love-hate relationship with Pablo Picasso",
    "4. Matisse is known as the father of Fauvism",
    "5. Henri Matisse loved African heart",
    "6. He developed a unique way of painting with scissors",
    "8. Matisse loved Jazz music",
    "9. Paul Cezanne’s art inspired Henri Matisse",
    "10. Matisse loved his pets"
]
console.log(myArrayLong)

const myArrayLongDisplay = document.querySelector("#replaceMeArray")
console.log(myArrayLongDisplay)
myArrayLongDisplay.innerHTML = myArrayLong.join("<br>")
myArrayLongDisplay.style.setProperty('font-family', 'Montserrat')
myArrayLongDisplay.style.setProperty('font-weight', '300')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Create a button and add an event listener to change the background of a section or div.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myButton = document.querySelector('.singlebutton button')
myButton.addEventListener('click', function () {
    myButton.classList.toggle('clicked')
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Select one of the 3 elements implemented in class and integrate it into your page. (Slide Panel, Modal, or Random background). If you use the random background you can apply it to any section. It does not have to be the whole background.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ==================== Modal ==================== 

const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')
console.log(modalButton)
console.log(modalCloseButton)
console.log(modalOverlay)

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal2')) {
    document.body.classList.remove('modal-is-open')
  }
})




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JQuery
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Replace the HTML content on a paragraph.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Create a button and add an event that adds some content at the beginning of a paragraph.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Libraries
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Incorporate one element from one of the following libraries: ApexCharts, Leaflet maps or AOS.
    // Bonus 10 points : Incorporate all 3 libraries.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ==================== ApexCharts ==================== 
var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'Artwork made',
      data: [32,81,145,50,72,108,140,77,23,86,91,50,33]
    }],
    xaxis: {
      categories: ["1890-1894","1895-1900","1901-1905","1906-1910","1911-1915","1916-1920","1921-1925","1926-1930","1931-1935","1936-1940","1941-1945","1946-1950","1951-1954"]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

// ==================== Leaflet maps ==================== 
var map = L.map('map').setView([43.7193868, 2.7938211], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

L.marker([43.7193868, 2.7938211]).addTo(map)
    .bindPopup('Musée Matisse')
    .openPopup();

    var circle = L.circle([43.7193868, 2.7938211], {
        color: '#1A62A3',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);
