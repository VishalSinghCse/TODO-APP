var ul =document.getElementById('list');
var li ; //declaring li

var addButton =document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeitem)

function addItem(params) {
    var input =document.getElementById('input');//grabbing the input from document
    var ItemValue=input.value;
    ul =document.getElementById('list');
    var textnode =document.createTextNode(item); //grab list

    if(item==''){ //item is empty string
        return false;
        //Add a p tag and assign a value of "ENTER TODO
    } else{
        //declaring checkbox  on the go //li initialized now but declared above
        li =document.createElement('li') //first we need to create an LI,then input then label
        var checkbox =document.createElement('input')
    }

}















//ELEMENT create TEXT NODE


// var h =document.createElement('h1')
// var myValue =document.createTextNode('Hello World')

// h.appendChild(myValue)
// document.querySelector

// // how to target DOM OBJECTS
// document.getElementById(id)
// document.getElementsByClassName(name)
// document.getElementsByTagName(name)