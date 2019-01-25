function popup() {
    var image =Olofsvalp1.jpg;
    w2popup.open({
        title: 'Image',
        body: '<div class="w2ui-centered"><img src="' + image + '"></img></div>'
    });
}

let btn = document.getElementsByClassName("pop-up");
btn.addEventListener("click", popup);