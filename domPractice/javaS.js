var list = document.createElement('ul');
document.body.appendChild(list);

var list1 = document.createElement('li');
list.appendChild(list1);
list1.innerText = 'Tiger'
var list2 = document.createElement('li');
list.appendChild(list2);
list2.innerText = 'Lion'
var list3 = document.createElement('li');
list.appendChild(list3);
list3.innerText = 'Dog'
var list4 = document.createElement('li');
list.appendChild(list4);
list4.innerText = 'Bear'
var list5 = document.createElement('li');
list.appendChild(list5);
list5.innerText = 'Pig'


var obj = {
  Bear: 'roar',
  cow: 'moo',
  lion: 'rawr',
  bird: 'tweet',
  dog: 'bark',
  cat: 'meow',
};

console.log(obj);

var tbl = document.createElement('table');
document.body.appendChild(tbl);

function keyLoop(){
  for (var i in obj){
    console.log(obj.keys())
    return obj.keys();
  }
}
