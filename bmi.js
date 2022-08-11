let w = document.querySelector("#weight");
let h = document.querySelector("#height");


document.querySelector(".result").addEventListener("click", ()=>{
    let wgt = w.value
    let hgt = h.value/100
    bmi = wgt/(hgt*hgt);
    // const para = document.createElement("p");
    // para.innerText = `Your BMI is: ${bmi.toFixed(2)}`;
    // document.body.appendChild(para);
    document.getElementById("result").innerHTML = bmi.toFixed(2);

    let status = '';
    if(bmi<18.5){
        status = "Underweight";
    }
    else if(bmi>=18.5 && bmi<25){
        status = "Normal weight";
    }
    else if(bmi>=25 && bmi<30){
        status = "Overweight";
    }
    else{
        status = "Obese";
    }
    document.querySelector
    (".status").innerHTML = `<span id="status">${status}</span>`;
    
})
