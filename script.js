// 1-1
let newdiv= document.getElementById('pirvelidivi')
newdiv.classList.add('wraper');

let newimage=document.createteElement('img');

newimage.setAttribute('scr', 'https://www.imdb.com/title/tt6791350/mediaviewer/rm4101910785/?ref_=tt_ov_i');
newimage.setAttribute('alt', 'image');

newdiv.appendchild(newimage);
document.getElementById('pirvelidivi').appendChild(newdiv);
// 1-2
let newh2=document.createElement('h2');
newh2.classList.add('title');
newh2.textcontent="image title";
newh2.style.color='red';
newh2.style.fpntsize='30px';
document.getElementById('pirvelidivi').appendChild(newh2);

// 2
let textdiv=document.querySelectorAll('paragrapi');
console.log(textdiv);
textdiv.forEach(function(item){ let newtext=document.queryselector('.paragrapi').innerhtml='<p> hello </p>'})

item.appendchild(newtext);