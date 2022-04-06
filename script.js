function getColorScheme() {
    let colorsArray = [];
    const mainColorHex = document.getElementById("color-pick-input").value.slice(1);
    const mode = document.getElementById("scheme-select").value;

    let url = `https://www.thecolorapi.com/scheme?hex=${mainColorHex}&mode=${mode}`;

    console.log(url);

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            data.colors.forEach((element) => {
                colorsArray.push(element.hex.value);
                // console.log(element.hex.value);
                // console.log(colorsArray.length);
            });
            // console.log(colors);
            for (let i = 0; i < colorsArray.length; i++) {
                document.getElementById(`color-${i}`).style.backgroundColor = colorsArray[i];

                document.getElementById(`hex-${i}`).innerHTML = colorsArray[i];
            }
        });
}

getColorScheme();

function copyHex(data) {
    // console.log(data.innerHTML);
    navigator.clipboard.writeText(data.innerHTML);
    alert(`Color ${data.innerHTML} was copied to clipboard`);
}
