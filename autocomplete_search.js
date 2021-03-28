import data from "./girlgroups-pop_data.js";

const userInput = document.getElementById("search_input");

function searchResult() {
  let userInputValue = userInput.value.toUpperCase();
  let searchOption = document.getElementById("search_option").value;

  if (searchOption === "Artist") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].artist.toUpperCase().indexOf(userInputValue) > -1) {
        console.log(data[i].artist.toUpperCase());
      }
    }
  }

  if (searchOption === "Title") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title.toUpperCase().indexOf(userInputValue) > -1) {
        console.log(data[i].title.toUpperCase());
      }
    }
  }
}

userInput.addEventListener("keyup", searchResult);
