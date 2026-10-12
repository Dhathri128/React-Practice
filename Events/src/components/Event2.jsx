const Event2=() =>{
    function handleButton(name){
        alert(`hello, ${name}`);
    }
    return(
        <div>
            <button onClick={()=>handleButton("Karanam")}>Click</button>
        </div>
    )
}

export default Event2;


/* see here we are passing name parameter to handleButton function through button using argument "Karanam" 
and using arrow function instead of normal function like in Event1 
here we passing some value so required to use arrow function if normal function is used ::
the name parameter receives the event object, not "Karanam".

When you click the button, React passes the click event object to handleButton as its first argument.

So, instead of receiving "Karanam", your name parameter receives the click event object. The alert will display something like hello [object PointerEvent] (or another event-object representation, depending on the browser).

Why? Because React automatically supplies the event object to the event handler.
*/