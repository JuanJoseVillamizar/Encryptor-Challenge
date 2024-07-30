const initialMessage = document.querySelector('.hero-input');


/* 
    a = !
    e = @    
    i = $
    o = %
    u = &
*/    

function encrypt(){
    console.log(initialMessage);
    const regex = /a/g;
    return console.log(initialMessage.value.replace(regex, 'hola'));
}
function hola(){
    return console.log(document.querySelector('.hero-input').value);
}