const cardDiv = (image2, betext,para1,button1,image3,title2,para2,button2,image4,title3,para3,button3) => {
    let div = document.createElement("div")
    div.className = "card1"
    div.innerHTML = `
                        <div class = "firstCard" id="box1">
                        <img class="re" id="uyt" src="/images/${image2}"> 
                        <h1>${betext}</h1>
                        <p>${para1}</p>
                        <button class="btn">${button1}</button>
                        </div>

                        <div class = "firstCard">
                        <img class="re" id="uyt" src="/images/${image3}">
                        <h1>${title2}</h1>
                        <p>${para2}</p>
                        <button class="btn">${button2}</button>
                        </div>

                        <div class = "firstCard">
                        <img class="re" id="uyt" src="/images/${image4}"> 
                        <h1>${title3}</h1>
                        <p>${para3}</p>
                        <button class="btn">${button3}</button>
                        </div>
                    
                   `

    return div
    
}

export{ cardDiv }

