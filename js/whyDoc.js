var expanded = 0;

function expandColumn(columnNumber) {
    var cols = [];
    var colRights = [];
    var colLefts = [];
    var infoTexts = [];
    for (var i = 0; i < 5; i++) {
        cols.push(document.getElementById(`column${i}`))
        colRights.push(document.getElementById(`colRight${i}`))
        colLefts.push(document.getElementById(`colLeft${i}`))
        infoTexts.push(document.getElementById(`infoText${i}`))
    }

    if (expanded != columnNumber) {
        cols[expanded].classList.remove("columnExpanded");
        cols[columnNumber].classList.add("columnExpanded");


        colRights[columnNumber].classList.remove("collapsed");
        colRights[expanded].classList.add("collapsed");


        // Calculate the width for colLeft when it is collapsed (10% in this example)
        var containerWidth = document.querySelector(".container").offsetWidth;
        var colLeftCollapsedWidth = containerWidth * 0.1;

        // Set the width of colLeft for the expanded and collapsed columns
        colLefts[expanded].style.width = "100%"; // Width of colLeft when expanded
        colLefts[columnNumber].style.width = colLeftCollapsedWidth + "px";

        /*         // Set the font size of colRight text based on its width when expanded
                var colRightWidth = colRights[columnNumber].offsetWidth;
                var fontSize = colRightWidth * 0.2; // You can adjust the font-size multiplier as needed
                colRights[columnNumber].style.fontSize = fontSize + "px"; */


        infoTexts[columnNumber].style.display = "none";
        infoTexts[expanded].style.display = "block";

        expanded = columnNumber;

    }

}