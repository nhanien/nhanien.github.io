function click_cancel() {
    window.location ="tt.html"
}


function init() {
    var cancel =document.getElementById('cancel');
    cancel.onclick =click_cancel;
}
window.onload=init;
