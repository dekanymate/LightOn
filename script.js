$(document).ready(function () {
    const szomszedok = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4, 6],
        4: [1, 3, 5, 7],
        5: [2, 4, 8],
        6: [3, 7],
        7: [4, 6, 8],
        8: [5, 7]
    }

    $("#button").click(init);
    $("#button-nehez").click({ nehez: true }, init);
    function init(event) {
        const nehez = event.data?.nehez;
        $("main").empty()
        let korDb = 9;

        for (let index = 0; index < korDb; index++) {
            let kor = $(`<div id="kor-${index}" class="kor"></div>`).click({ index }, kattint);
            $("main").append(kor)
        }

        if (nehez) {
            for (let index = 0; index < 3; true) {
                const random = Math.floor(Math.random() * 9)
                if (!$("#kor-" + random).hasClass("piros")) {
                    $("#kor-" + random).addClass("piros")
                    index++;
                }
            }
        }
    }

    function kattint(event, szomszedIndex) {
        let index
        if (typeof szomszedIndex == "number") {
            index = szomszedIndex;
        } else {
            index = event.data.index
        }

        if ($("#kor-" + index).hasClass("piros")) {
            $("#kor-" + index).removeClass("piros")
        } else {
            $("#kor-" + index).addClass("piros")
        }
        if (event) {
            for (let i = 0; i < szomszedok[index].length; i++) {
                kattint(false, szomszedok[index][i])
            }
        }
    }
})