window.onload = function(){
    load();
    render();
}

let bidsArr = [] 
document.getElementById("btn1").addEventListener("click",function (){addBid("input1")}) 
document.getElementById("btn2").addEventListener("click",function (){addBid("input2")})


function addBid(input) {
    let inputBox = document.getElementById(input)
    //add input box value to bids array
    bidsArr.push(inputBox.value)
    save(bidsArr)
    //add variable to save the a bid items output
    render();
}
function render() {
    let output = '';
    //loop through bids array and add each bid to output string
    for (let i=0; i<bidsArr.length; i++ ) {
        output+=`<li>${bidsArr[i]}</li>`

    }
    document.getElementById('title').innerHTML=output
// console.log(bidsArr)
inputBox.value='';
}
function save(array) {
    let savedata = JSON.stringify(array)
    localStorage.setItem('BIDSARR', savedata);
}

function load() {
    let data = JSON.parse(localStorage.getItem('BIDSARR'))
    bidsArr = data;
}





