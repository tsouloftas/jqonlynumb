var cctime;
function onlynumbcallback() {
    //callback
}

function ccchange() {
    ccenter(this)
}

function vn(a) {
    var b = window.event ? a.keyCode : a.which;
    if (8 == a.keyCode || 46 == a.keyCode || 37 == a.keyCode || 39 == a.keyCode) return !0;
    if (48 > b || 57 < b || 222 == a.keyCode) return $(this).css("border", "solid 1px #ab3434", 300, cb(this)), !1;
    clearTimeout(cctime);
    //cctime = setTimeout(onlynumbcallback, 250);
    return !0
}

function cb(th) {
    setTimeout(function () {
        $(th).removeClass("unable").css("border", "1px solid #bbb")
    }, 100)
}

$(".numbers").keypress(vn);