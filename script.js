let btns = document.querySelectorAll(".btns")
let a1 = document.querySelector("#a1")
let a2 = document.querySelector("#a2")
let multi = document.querySelector("#multi")
console.log(btns);

for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener("click", () => {
        x = btns[index].value
        if (x == "=") {
            a2.value =eval(a1.value)
        } else if (x == "AC") {
            a1.value = ""
            a2.value = ""
        } else if (x == "C") {
            p = a1.value.slice(0, -1)
            a1.value = p
        }
        else if (x == "X") {
            a1.value += "*"
        }
        else {
            a1.value += x
        }

    })

}

