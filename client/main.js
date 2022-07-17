const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const compSubmit = document.getElementById("comp-submit");

addCompliment = (string) => {
    const compCard = document.createElement("div");
    compCard.classList = "comp-card";

    compCard.innerHTML = `<p>${addedComp}</p>
    <div class="comp-card-buttons">
    <button onclick="deleteComp(${comps})">delete</button>
    <div/>
    `
}


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


compSubmit.addEventListener("click", getCompliment);
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)