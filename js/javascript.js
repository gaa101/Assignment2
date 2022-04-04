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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\

const myArrayLong = [
    "1. Matisse worked as a court administrator<br>",
    "2. Sickness brought a turnaround in Henri Matisse’s career<br>",
    "3. He had a love-hate relationship with Pablo Picasso<br>",
    "4. Matisse is known as the father of Fauvism<br>",
    "5. Henri Matisse loved African heart<br>",
    "6. He developed a unique way of painting with scissors<br>",
    "8. Matisse loved Jazz music<br>",
    "9. Paul Cezanne’s art inspired Henri Matisse<br>",
    "10. Matisse loved his pets<br>"
]
console.log(myArrayLong)

const myArrayLongDisplay = document.querySelector("#replaceMeArray")
console.log(myArrayLongDisplay)
myArrayLongDisplay.innerHTML = myArrayLong
myArrayLongDisplay.style.setProperty('font-family', 'Montserrat')
myArrayLongDisplay.style.setProperty('font-weight', '300')
 //*******************************************************************************************************************
        // WHY are there , in my site?? How do i remove?
 //*******************************************************************************************************************

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Create a button and add an event listener to change the background of a section or div.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myButton = document.querySelector('singlebutton')
myButton.addEventListener('click', function () {
    myButton.style.toggle.background = "#000"
    myButton.style.color = "#fff"
    myButton.classList.toggle('clicked')
}
 //*******************************************************************************************************************
        // WHY can't I change the color of the button when clicked??
 //*******************************************************************************************************************

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Select one of the 3 elements implemented in class and integrate it into your page. (Slide Panel, Modal, or Random background). If you use the random background you can apply it to any section. It does not have to be the whole background.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
