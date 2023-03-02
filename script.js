const diagram = document.querySelectorAll(".diagram");
const monthsDiv = document.querySelector("#months-div");

exampleApi();

async function exampleApi() {
    const api = await fetch("./data.json");
    const data = await api.json();

    showdiv(data);
    giveHeight();
}

function showdiv(data) {
    for (const element of data) {
        let div = `
        <div class="month-container">
        <div class="diagram">
          <p class="spend-p">$${element.amount}</p>
        </div>
        <span>${element.day}</span>
      </div>
        `;


        monthsDiv.insertAdjacentHTML("beforeend", div);

    }



}





function giveHeight() {
    for (let el of monthsDiv.children) {
        let mount = el.children[0].children[0].textContent.substring(1);
        let diagram = el.children[0];
        diagram.style.height = `${mount}%`;
        if (diagram.style.height == "52.36%") {
            diagram.classList.add("active");
        }

    }
}