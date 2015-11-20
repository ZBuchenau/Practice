document.getElementsByClassName('error-low')[0].style['color'] = 'red';
document.getElementsByClassName('error-low')[0].style['font-weight'] = 'bold';
document.getElementsByClassName('error-low')[0].style['display'] = 'none';


document.getElementsByClassName('error-high')[0].style['color'] = 'red';
document.getElementsByClassName('error-high')[0].style['font-weight'] = 'bold';
document.getElementsByClassName('error-high')[0].style['display'] = 'none';


document.getElementsByClassName('success')[0].style['color'] = 'green';
document.getElementsByClassName('success')[0].style['font-weight'] = 'bold';
document.getElementsByClassName('success')[0].style['display'] = 'none';

console.log(Math.floor((Math.random()*100)+1));
