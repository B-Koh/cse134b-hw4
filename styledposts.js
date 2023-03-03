export function styleDialog(){
    let d = document.getElementById("form");
    d.style.display = "flex";
    d.style.flexDirection = "column";

    let date = document.getElementById("pdate");
    date.style.marginBottom= "15px";
    let title = document.getElementById("ptitle");
    title.style.marginBottom= "15px";
    let summ = document.getElementById("psumm");
    summ.style.marginBottom= "15px";

    let cancel = document.getElementById("cancel");
    cancel.style.marginRight= "8px";

    let buttonDiv = document.getElementById("button");
    buttonDiv.style.textAlign= "right";

    

    let abutt = document.getElementById("add-blog");
    abutt.style.marginTop= "30px";
    

    
}

export function styleList(){
    let list = document.getElementById("list");
    list.style.marginTop= "30px";
    list.style.fontSize= "1.2em";

    document.body.style.paddingLeft = "40px"
    document.body.style.paddingRight = "40px"

    document.body.style.backgroundColor = "#D3D3D3";

    let a = document.getElementById("edit")
    

}