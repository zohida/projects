let toastBox = document.querySelector(".toast-box");
let successMsg = "<i class='fa fa-check'></i> Successfully submitted";
let invalidMsg = "<i class='fa fa-exclamation'></i> Invalid input, check again...";
let errorMsg = "<i class='fa fa-close'></i> Please fix the error!";



function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')) {
        toast.classList.add('error');
    }

    if(msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove()
    }, 5000);
}