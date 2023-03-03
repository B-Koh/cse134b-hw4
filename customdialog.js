
export function alertDialog() {
    const d = document.getElementById("a-dialog");
    let p = document.createElement("P");
    let button = document.createElement("BUTTON");
    let text = document.createTextNode("Ok");
    d.innerHTML="";
    button.appendChild(text);
    p.innerHTML="Alert Pressed!";
    d.append(p);
    d.append(button);
    d.show();

    button.addEventListener("click", ()=> {
        d.close();
        p.remove();
        button.remove();
        document.getElementById("out").innerHTML = "";
    });

}

export function confDialog() {
    const d = document.getElementById("a-dialog");
    let p = document.createElement("P");
    let buttonC = document.createElement("BUTTON");
    let div = document.createElement("div");
    buttonC.style.marginRight = "10px";
    let buttonO = document.createElement("BUTTON");
    
    let textOk = document.createTextNode("Ok");
    let textC = document.createTextNode("Cancel");
    d.innerHTML="";
    buttonO.appendChild(textOk);
    buttonC.appendChild(textC);
    div.appendChild(buttonC);
    div.appendChild(buttonO);
    p.innerHTML="Do you confirm this?";
    d.append(p);
    d.append(div);
    d.show();
    buttonO.addEventListener("click", ()=> {
        d.close();
        p.remove();
        buttonC.remove();
        buttonO.remove();
        div.remove();
        d.style.cssText = "";
        document.getElementById("out").innerHTML = 'The value returned by the confirm method is: True';
    });

    buttonC.addEventListener("click", ()=> {
        d.close();
        p.remove();
        buttonC.remove();
        buttonO.remove();
        div.remove();
        d.style.cssText = "";
        document.getElementById("out").innerHTML = 'The value returned by the confirm method is: False';
    });

}

export function prompDialog() {
    let d = document.getElementById("a-dialog");
    d.style.display= "flex";
    d.style.flexDirection= "column";
    let p = document.createElement("P");
    let div = document.createElement("div");
    div.style.marginTop= "10px";
    let buttonC = document.createElement("BUTTON");
    buttonC.style.marginRight = "10px";
    let buttonO = document.createElement("BUTTON");
    let input = document.createElement("textarea");
    let textOk = document.createTextNode("Ok");
    let textC = document.createTextNode("Cancel");
    
    buttonO.appendChild(textOk);
    buttonC.appendChild(textC);
    div.appendChild(buttonC);
    div.appendChild(buttonO);
    p.innerHTML="What is your name?";
    input.cols = "40";
    input.rows = "1";
    
    d.append(p);
    d.append(input);
    d.append(div);
    
    d.show();

    buttonO.addEventListener("click", ()=> {
        let res = input.value
        let result = DOMPurify.sanitize(res);
        d.close();
        p.remove();
        buttonC.remove();
        buttonO.remove();
        input.remove();
        div.remove();
        d.style.cssText = "";
        if(result == "" || result == null){
            document.getElementById("out").innerHTML = 'User didn’t enter anything';
        }
        else{
            document.getElementById("out").innerHTML = `Prompt result: ${result}`;
        }
    });

    buttonC.addEventListener("click", ()=> {
        d.close();
        p.remove();
        buttonC.remove();
        buttonO.remove();
        input.remove();
        div.remove();
        d.style.cssText = "";
        document.getElementById("out").innerHTML = 'User didn’t enter anything';
    });


}


