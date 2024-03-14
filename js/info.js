
const infoDiv = (title, para, button) => {
    let div = document.createElement("div")
    div.className = "info1"
    div.innerHTML = `<h1>${title}</h1>
                    <p>${para}</p>
                    <button class="btn">${button}</button>
    `
    return div                    
}

export { infoDiv }

const infoDiv1 = (title2, para2, button2) => {
    let div = document.createElement("div")
    div.className = "info2"
    div.innerHTML = `<h1>${title2}</h1>
                    <p>${para2}</p>
                    <button class="btn">${button2}</button>
    `
    return div                    
}

export { infoDiv1 }