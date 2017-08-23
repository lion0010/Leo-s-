var rightBtn = document.getElementById('carousel_rightBtn');
var leftBtn = document.getElementById('carousel_leftBtn');
var oimgLists = document.getElementById('imagesList').getElementsByTagName('li');
var ocircleLists = document.getElementById('circles').getElementsByTagName('li');
console.log(oimgLists);
console.log(ocircleLists);
var index = 0;
rightBtn.onclick = function() {
    index++;
    if (index >= oimgLists.length) {
        index = 0;
    }
    move();
}
leftBtn.onclick = function() {
    index--;
    if (index < 0) {
        index = oimgLists.length - 1;
    }
    move();
}
for (var i = 0; i < ocircleLists.length; i++) {
    (function(i) {
        ocircleLists[i].onmouseover = function() {
            index = i;
            move();
        }
    })(i);
}

function move() {
    for (var j = 0; j < oimgLists.length; j++) {
        oimgLists[j].className = '';
        ocircleLists[j].className = '';
    }
    console.log("abc");
    oimgLists[index].className = 'current';
    ocircleLists[index].className = 'current';
}