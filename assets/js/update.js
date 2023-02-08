let runScripts = () => {
    let chart_bars = document.getElementById("chart-bars");
    //Esto no se debe hacer, solo para seguimiento
    //console.log(chart_bars);
    let icons = document.getElementsByTagName("i");
    //console.log(icons);
    let cards = document.getElementsByClassName("card");
    //console.log(cards);
};

let modifyText = () => {
    let listOfP = document.getElementsByTagName("p");
    let elementP = listOfP[3];
    elementP.innerHTML = "Dinero actual";
    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4 = listOfH4[0];
    elementH4.innerHTML = "$301k";
}

runScripts();
modifyText();