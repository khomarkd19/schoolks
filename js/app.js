import {infoDiv} from "./info.js"
import {imgDiv} from "./img.js"
import { cardDiv } from "./card.js"

/* import { imgDiv1 } from "./img.js" */


let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")



const dataPne = {
    title : "This is it",
    para : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi velit odit optio inventore ut quis, reprehenderit unde quaerat molestiae doloribus corporis nesciunt laboriosam cupiditate sit tempora! Odit, vel iste!",                   
    button: "Contact Us",
    image: "manthinking.png"
}

const  {title, para, button, image } = dataPne




const dataTwo = {
    image2: "businessCard.png",
    image3: "businessCard.png",
    image4: "businessCard.png",

    betext : "cards",
    para1 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi velit odit optio inventore ut quis, reprehenderit unde quaerat molestiae doloribus corporis nesciunt laboriosam cupiditate sit tempora! Odit, vel iste!",
    button1: "Contact Us",

    title2 : "cards",
    para2 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi velit odit optio inventore ut quis, reprehenderit unde quaerat molestiae doloribus corporis nesciunt laboriosam cupiditate sit tempora! Odit, vel iste!",
    button2: "Contact Us",

    title3 : "cards",
    para3 : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi velit odit optio inventore ut quis, reprehenderit unde quaerat molestiae doloribus corporis nesciunt laboriosam cupiditate sit tempora! Odit, vel iste!",
    button3: "Contact Us",
   
 
}

const  {image2, image3, image4, betext, para1, button1, title2, para2, button2, title3, para3,button3 } = dataTwo


sectionOne.append(infoDiv(title, para,  button))
sectionOne.append(imgDiv(image))


sectionTwo.append(cardDiv(image2,betext,para1,button1, image3,title2,para2,button2, image4,title3,para3,button3))
