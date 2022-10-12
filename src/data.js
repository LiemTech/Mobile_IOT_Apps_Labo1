window.addEventListener('load', () => {
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");

    a1.classList.remove('active');
    a2.classList.add('active');

    document.body.appendChild(dataPage());
});

function dataPage() {

    const dataDiv = document.createElement('div');

    const middleDiv = document.createElement('div');
    middleDiv.classList.add('middleDiv');
    middleDiv.innerHTML = "DASHBOARD COMING SOON...";


    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottomDiv');
    bottomDiv.innerHTML = "UPDATE NEXT LABO";

    dataDiv.appendChild(middleDiv);
    dataDiv.appendChild(bottomDiv);

    return dataDiv;
}