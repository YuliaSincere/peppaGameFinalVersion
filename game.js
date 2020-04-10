function moveRect(e) {

    var peppa = document.getElementById("peppa");

    switch (e.keyCode) {
        case 37:
            if (peppaLeft > 0) {
                peppaLeft -= 20;
                peppa.style.left = peppaLeft + "px";
            }

            break;


        case 39:
            if (peppaLeft < document.documentElement.clientWidth - peppaWidth) {
                peppaLeft += 20;
                peppa.style.left = peppaLeft + "px";
            }

            break;
    }
}

function moveElement(element, topCoordinate) {
    const chelStyle = window.getComputedStyle(element, null);
    const height = parseInt(chelStyle.getPropertyValue("height"));

    if ((topCoordinate + height) >= document.documentElement.clientHeight) {

        return;

    }

    element.style.top = topCoordinate + 'px';
    return topCoordinate + 10;
}

function moveHeads() {
    chel1Top = moveElement(chel1, chel1Top);
    chel2Top = moveElement(chel2, chel2Top);
    chel3Top = moveElement(chel3, chel3Top);
    chel4Top = moveElement(chel4, chel4Top);
    chel5Top = moveElement(chel5, chel5Top);
    chel6Top = moveElement(chel6, chel6Top);
    chel7Top = moveElement(chel7, chel7Top);
    chel8Top = moveElement(chel8, chel8Top);
    chel9Top = moveElement(chel9, chel9Top);
    chel10Top = moveElement(chel10, chel10Top);

    const peppa = document.getElementById("peppa");
    peppaTop = document.documentElement.clientHeight - peppaHeight;
    peppa.style.top = peppaTop + 'px';

    // Ищем пересечение пеппы и сотоварищей.
    if (!isNaN(chel1Top) && isPeppaIntersectWith(chel1)) {

        chel1.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel1Top = NaN;
    }

    if (!isNaN(chel2Top) && isPeppaIntersectWith(chel2)) {

        chel2.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel2Top = NaN;
    }

    if (!isNaN(chel3Top) && isPeppaIntersectWith(chel3)) {

        chel3.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel3Top = NaN;
    }

    if (!isNaN(chel4Top) && isPeppaIntersectWith(chel4)) {

        chel4.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel4Top = NaN;
    }

    if (!isNaN(chel5Top) && isPeppaIntersectWith(chel5)) {

        chel5.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel5Top = NaN;
    }

    if (!isNaN(chel6Top) && isPeppaIntersectWith(chel6)) {

        chel6.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel6Top = NaN;
    }

    if (!isNaN(chel7Top) && isPeppaIntersectWith(chel7)) {

        chel7.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel7Top = NaN;
    }

    if (!isNaN(chel8Top) && isPeppaIntersectWith(chel8)) {

        chel8.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel8Top = NaN;
    }

    if (!isNaN(chel9Top) && isPeppaIntersectWith(chel9)) {

        chel9.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel9Top = NaN;
    }

    if (!isNaN(chel10Top) && isPeppaIntersectWith(chel10)) {

        chel10.style.visibility = "hidden";
        count = count + 1;

        // Сотоварищ уже сожран и скрыт - делаем его координату не числом,
        // чтобы не проверять потом повторно.
        chel10Top = NaN;
    }

    if (count === 10) {
        const waaagh = document.getElementById("waaagh");
        waaagh.style.visibility = "visible";

    }

    document.getElementById("count").innerHTML = count;
}

function isPeppaIntersectWith(element) {
    const chelStyle = window.getComputedStyle(element, null);
    const top = parseInt(chelStyle.getPropertyValue("top"));
    const left = parseInt(chelStyle.getPropertyValue("left"));
    const width = parseInt(chelStyle.getPropertyValue("width"));
    const height = parseInt(chelStyle.getPropertyValue("height"));
    const bottom = top + height;
    const right = left + width;

    const peppaBottom = peppaTop + peppaHeight;
    const peppaRight = peppaLeft + peppaWidth;

    if (peppaRight < left || right < peppaLeft || peppaBottom < top || bottom < peppaTop) {
        return false;
    }

    return true;
}

function getRandomTopCoordinate() {
    const max = 10;
    const offset = Math.floor(Math.random() * Math.floor(max) + 1) * 30;
    return -100 - offset;
}

function onDocumentLoaded() {
    const peppa = document.getElementById("peppa");
    const peppaStyle = window.getComputedStyle(peppa, null);

    peppaWidth = parseInt(peppaStyle.getPropertyValue("width"));
    peppaHeight = parseInt(peppaStyle.getPropertyValue("height"));

    chel1 = document.getElementById("chel1");
    chel2 = document.getElementById("chel2");
    chel3 = document.getElementById("chel3");
    chel4 = document.getElementById("chel4");
    chel5 = document.getElementById("chel5");
    chel6 = document.getElementById("chel6");
    chel7 = document.getElementById("chel7");
    chel8 = document.getElementById("chel8");
    chel9 = document.getElementById("chel9");
    chel10 = document.getElementById("chel10");

    setInterval(moveHeads, 100);
}

addEventListener("keydown", moveRect);
addEventListener("load", onDocumentLoaded)

var count = 0;
var peppaLeft = 0;
var peppaTop = 0;
var peppaWidth = 0;
var peppaHeight = 0;
var chel1Top = 0;
var chel2Top = getRandomTopCoordinate();
var chel3Top = getRandomTopCoordinate();
var chel4Top = getRandomTopCoordinate();
var chel5Top = getRandomTopCoordinate();
var chel6Top = getRandomTopCoordinate();
var chel7Top = getRandomTopCoordinate();
var chel8Top = getRandomTopCoordinate();
var chel9Top = getRandomTopCoordinate();
var chel10Top = getRandomTopCoordinate();
var chel1;
var chel2;
var chel3;
var chel4;
var chel5;
var chel6;
var chel7;
var chel8;
var chel9;
var chel10;
