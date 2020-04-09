var ul =document.getElementById('list');
var li ; //declaring li

var addButton =document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton=document.getElementById('remove');
removeButton.addEventListener('click',removeitem)

function addItem() {
    var input =document.getElementById('input');//grabbing the input from document
    var item=input.value;
    ul =document.getElementById('list');
    var textnode =document.createTextNode(item); //grab list

    if(item==''){ //item is empty string
        return false;
        //Add a p tag and assign a value of "ENTER TODO
    } else{
       
        /* CREATE LI */

        //declaring checkbox  on the go //li initialized now but declared above
        li =document.createElement('li') //first we need to create an LI,then input then label
       
       /* CREATE CHECKBOX */
        var checkbox =document.createElement('input')
        //input ke koi properties hone chahiye
        checkbox.type ='checkbox';
       
        //setAttribute -how we can assign id,class to checkbox or p tah or h1 EventTarget
        checkbox.setAttribute('id','check')//takes 2 parameter key, value

        /* create label */ //label dont have any properties
        var label =document.createElement('label');

        //setAttribute for any property
        label.setAttribute('for','item') //optional

        //add these elements on web page

        ul.appendChild(label); //generating the element
        li.appendChild(checkbox)//

        label.appendChild(textnode);//putting inside text node
        li.appendChild(label);

        ul.insertBefore(li, ul.childNodes[0]);
        li.className ='visual';

        input.value='';//clear after input
    }

}

function removeItem() {
    li =ul.children
        for (let index = 0; index < li.length; index++) {
            while (li[index] &&li[index].children[0].checked) {
                
            }
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