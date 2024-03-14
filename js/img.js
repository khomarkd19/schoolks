const imgDiv = (image) => {
    let div = document.createElement("div")
    div.className = "img1"
    div.innerHTML = `<img class="pic1" src="/images/${image}">`

    return div
    
}

export{ imgDiv }

/* const imgDiv1 = (image2) => {
    let div = document.createElement("div")
    div.className = "img2"
    div.innerHTML = `<img class = "pic2" src="/images/${image2}">`
    div.innerHTML = `<img class = "pic2" src="/images/${image2}">`

    return div
    
}

export{ imgDiv1 } */

