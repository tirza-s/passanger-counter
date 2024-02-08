// document.getElementById("count").innerText = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function save() {
    let countString = count + " - "
    saveEl.textContent += countString
    countEl.textContent = 0
    // reset the count back to set 0 after save because JS remember the initial count. 
    count = 0
}

save()
