console.log("hello world");

let typable = document.getElementById('typable');
let list = document.getElementById('list');
let button = document.getElementById('button');

button.addEventListener("click" , function () {
    var newelem = document.createElement('p')
    newelem.innerText = typable.value;
    list.appendChild(newelem);

    newelem.addEventListener('click', function(){
        newelem.style.color = "red";
    })

    newelem.addEventListener('dblclick', function(){
        list.removeChild(newelem); 
    })
});

