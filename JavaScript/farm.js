/*A farmer wants to know the cost of producing a crop according to the selected seed,
Knowing the number of seeds you will use and the cost of each seed. */

let vegetable = prompt("Enter the product you want");

if (vegetable === "onion") {
    let inquiry = prompt("Long or egg onion?");
    if (inquiry === "long") {
        let longOnion = parseInt(prompt("How many seeds do you want?"));
        alert(`The price per seed is 1,500 pesos and ${longOnion} seeds cost: ${longOnion * 1500}`);
    } else if (inquiry === "egg") {
        let eggOnion = parseInt(prompt("How many seeds do you want?"));
        alert(`The price per seed is 1,300 pesos and ${eggOnion} seeds cost: ${eggOnion * 1300}`);
    }
} else if (vegetable === "potato") {
    let inquiry = prompt("What type of potato: criolla, pastusa, or salentuna?");
    if (inquiry === "criolla") {
        let criollaPotato = parseInt(prompt("How many seeds do you want?"));
        alert(`The price per seed is 8,000 pesos and ${criollaPotato} seeds cost: ${criollaPotato * 8000}`);
    } else if (inquiry === "pastusa") {
        let pastusaPotato = parseInt(prompt("How many seeds do you want?"));
        alert(`The price per seed is 9,000 pesos and ${pastusaPotato} seeds cost: ${pastusaPotato * 9000}`);
    } else if (inquiry === "salentuna") {
        let salentunaPotato = parseInt(prompt("How many seeds do you want?"));
        alert(`The price per seed is 1,100 pesos and ${salentunaPotato} seeds cost: ${salentunaPotato * 1100}`);
    }
} else if (vegetable === "tomato") {
    let question = prompt("We only have chonto tomatoes. Do you want to continue shopping? yes/no");
    if (question === "yes") {
        let tomato = parseInt(prompt("How many seeds do you want?"));
        alert(`The price per seed is 1,500 pesos and ${tomato} seeds cost: ${tomato * 1500}`);
    } else if (question === "no") {
        alert("Thank you very much");
    }
} else {
    alert("We don't have that seed available");
}
