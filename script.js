console.log("toaster App");
let toastBox = document.getElementById("toastBox");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submited';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidsMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input ,check again';


function showToast(msg){
    // console.log("hello btn");
    let divElem = document.createElement("div");
    divElem.classList.add("toast");
    divElem.innerHTML= msg;
    toastBox.appendChild(divElem);
    // console.log(divElem);

    if(msg.includes('Successfully')){
        divElem.classList.add("success")
    }else if(msg.includes('error!')){   
        divElem.classList.add("error")

    }else{
        divElem.classList.add("invalid")

    }

    //here i am removing element after 6seconds

    setTimeout(()=>{
        divElem.remove();
    },5000)
}