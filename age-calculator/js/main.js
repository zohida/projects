let userInput = document.querySelector("#date");
let button = document.querySelector("#calculate");
let result = document.querySelector(".result");

userInput.max = new Date().toISOString().split("T")[0];

button.addEventListener("click", () => {
    let dateBirth = new Date(userInput.value);
    let y1 = dateBirth.getFullYear();
    let m1 = dateBirth.getMonth() + 1;
    let d1 = dateBirth.getDate();

    let today = new Date();
    let y2 = today.getFullYear();
    let m2 = today.getMonth() + 1;
    let d2 = today.getDate();


    let y3, m3, d3;

    y3 = y2 - y1;

    if(m2 >= m1) {
        m3 = m2 - m1;
    }else {
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2 >= d1) {
        d3 = d2 - d1;
    }else {
        let daysInPreviousMonth = new Date(y2, m2, 0).getDate();
        m3--;
        d3 = daysInPreviousMonth + d2 - d1 -1;
    }

    if(m3 < 0) {
        m3 = 11;
        y3--;
    }

    

    result.innerHTML = `You are <span>${y3} </span> years, <span>${m3} </span> months and <span>${d3}</span> days old...`
    

})

