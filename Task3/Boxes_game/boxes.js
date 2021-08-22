
var RightBoexs =[];
var LeftBoxes =[];
var count=0;

const Movment = [
    {index:"" ,start : "", right: "" , left:""},   
  ];

function createBox(){
    removeBoxe();
   var  Boxes=[];
    const numb= document.getElementById('number-in').value;

    if(numb != ""  &&  !isNaN(numb)){
        let i=0 ,r=0,l=0 ;
    for(; i< numb ; i++){
        if(i % 2 == 0){
            RightBoexs[r++]=i;
        }
        else{
            LeftBoxes[l++]  =i;
        }
      
    }
    RightBoexs.map(addBoxRight);
    LeftBoxes.map(addBoxLeft);

    }
    else{
    alert("Should enter vaild number");
    }

  
}

function addBoxRight(num){
    var element;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    var div = document.createElement('div');
    var lable= document.createElement('lable');
    lable.innerHTML = num;
    lable.setAttribute('class' , 'lable-box');
    div.setAttribute('class', 'small-box');  
    div.style.border='solid 4px';
    div.style.borderColor= "#" + randomColor;
        
    div.appendChild(lable);
    element = document.getElementById("right-group");

    element.appendChild(div);
}

function createRow(){
    console.log(Movment);
    var table = document.getElementById("movment-table");
    let i=0;
    for(;i<Movment.length;i++){
    var row = table.insertRow(-1);
    row.style.borderColor="gray";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = Movment[i].index;
    cell2.innerHTML = Movment[i].start;
    cell3.innerHTML = Movment[i].right;
    cell4.innerHTML = Movment[i].left;
    }
}

function addBoxLeft(num){
    var element;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    var div = document.createElement('div');
    var lable= document.createElement('lable');
    lable.innerHTML = num;
    lable.setAttribute('class' , 'lable-box');
    div.setAttribute('class', 'small-box');  
    div.style.border='solid 4px';
    div.style.borderColor= "#" + randomColor;
        
    div.appendChild(lable);
    element = document.getElementById("left-group");

    element.appendChild(div);
}

function removeBoxe(){
    const myNode1 = document.getElementById("right-group");
    myNode1.innerHTML = '';

    const myNode2 = document.getElementById("left-group");
    myNode2.innerHTML = '';
}


function moveToRight(){
    var btn = document.getElementById("right-btn");
    var btn2 = document.getElementById("left-btn");
    btn2.disabled = false;
    btn2.style.opacity=1;
    if(RightBoexs.length != 0){
    removeBoxe();
    Movment.push({index:count, start:"right",right:"0" ,left:"1"});
    let val =  RightBoexs.pop();
    LeftBoxes.push(val);
     
    RightBoexs.map(addBoxRight);
    LeftBoxes.map(addBoxLeft);
    count++;
    }
    else {
        btn.style.opacity=0.5;
        btn.disabled = true;
    }
}

function moveToLeft(){
  
    var btn = document.getElementById("right-btn");
    btn.disabled = false;
    btn.style.opacity=1;
    var btn2 = document.getElementById("left-btn");
    if(LeftBoxes.length != 0){
    removeBoxe();
    Movment.push({index:count, start:"left",right:"1" ,left:"0"});
    let val1 =   LeftBoxes.pop();
    RightBoexs.push(val1);

    RightBoexs.map(addBoxRight);
    LeftBoxes.map(addBoxLeft);
    count++;
    }
    else{
        btn2.style.opacity=0.5;
        btn2.disabled = true;
    }
}


function display(){
    const myNode1 = document.getElementById("movment-table");
    myNode1.innerHTML = '';
    if(Movment.length-1 > 0){
    createRow();
   var tbl= document.getElementById("movment-table");
   tbl.style.display= "block";
   tbl.setAttribute('class', 'table');
    }
}
