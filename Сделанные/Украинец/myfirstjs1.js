function out(){
var p;
p = document.getElementById('out');
//p.innerHTML = 'Hello';
//p.innerHTML += '<b> Hello</b>';
//p.innerHTML = p.innerHTML + 'Hello';
//p.innerText += ' <b>Hi</b>';
//p.insertAdjacentHTML ('beforeBegin','Hi')
//p.insertAdjacentHTML ('afterBegin','Hi')
//p.insertAdjacentHTML ('beforeEnd','Hi')
//p.insertAdjacentHTML ('afterEnd','Hi')
p.outerHTML = '<div class="one">hello</div>'
}
