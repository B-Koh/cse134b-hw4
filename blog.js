var bool = false;
let list = document.getElementById("list");
let d = document.getElementById("dialog");

//function to display main dialog
export function displayDialog() {
    let d = document.getElementById("dialog");
    d.show();
}

//function for the cancel button
export function onCancel() {
    //check if edit or adding a blog
    if(bool){
        let data = readData();
        insertData(data);
        resetInput();
        bool = false;
    }
    else{
        resetInput();
    }
    
    d.close();
    
}

//save and display data after user input
export function onSave() {
    let data = readData();
    insertData(data);
    resetInput();
    d.close();
    

}
//retrived the data that user inputs into the input elements
function readData() {
    var data = {}
    data["title"] = document.getElementById("ptitle").value;
    data["date"] = document.getElementById("pdate").value;
    data["summ"] = document.getElementById("psumm").value;
    return data;
}

//function to edit previous posted blogs
export function editBlog(e) {

    let blog = e.parentElement;

    document.getElementById("ptitle").value = blog.children[0].innerHTML;
    //convert date back to original format
    let dateOriginal = blog.children[1].innerHTML.split("").reverse().join("");
    document.getElementById("pdate").value = dateOriginal;
    document.getElementById("psumm").value = blog.children[2].innerHTML;

    deleteBlogContent(e)
    d.show();
    bool = true;
    
}

//function that is called when the delete button is pressed
export function deleteBlog(e) {
    let dd = document.getElementById("delete-dialog");
    dd.show();

    //eventlisteners for which button is clicked
    document.getElementById("no").addEventListener("click", () => {
        dd.close();
    });
    document.getElementById("yes").addEventListener("click", () => {
        deleteBlogContent(e);
        dd.close();
    });

}

//function to delete li element
function deleteBlogContent(e){
    let blog = e.parentElement;
    blog.remove();
}

//print out data on screen by creating a new li element and appending to ul
function insertData(data) {
    let li = document.createElement("li");
    //convert date to normal date format
    let newDate = data.date.split("").reverse().join("");
    li.innerHTML = "Title: " + `<span>${data.title}</span>` + "\n" + " Date: " + `<span>${newDate}</span>` + "\n" + " Summary: " + `<span>${data.summ} </span>` + "\n" 
    +  `<a id="edit" onclick="window.editBlog(this)"><i class="fa-solid fa-pencil"></i></i></a>  <a onclick="window.deleteBlog(this)"><i class="fa-solid fa-trash"></i></a>`;
    list.appendChild(li);
    
    
}

//function to clear dialog fields
function resetInput() {
    document.getElementById("ptitle").value = "";
    document.getElementById("pdate").value = "";
    document.getElementById("psumm").value = "";
}



