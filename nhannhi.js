function click_cancel() {
    window.location ="indexx.html"
}


function init() {
    var cancel =document.getElementById('cancel');
    cancel.onclick =click_cancel;
    alert("123")
}
window.onload=init;
