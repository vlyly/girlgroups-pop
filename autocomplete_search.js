const userInput = document.getElementById("search_input");
const autocomplete_list = document.getElementById("autocomplete_list");
let searchOption = document.getElementById("search_option");
const autocomplete_list_item_no_result = document.createElement("li");
autocomplete_list_item_no_result.classList.add(
  "autocomplete_list_item_no_result"
);
autocomplete_list_item_no_result.classList.add("autocomplete_list_item");
autocomplete_list_item_no_result.innerText = "일치하는 검색 결과가 없습니다.";
const data = [
  {
    artist: "에이핑크(Apink)",
    title: "Remember",
    src: "Apink/Girl'sPop_Remember-에이핑크(Apink)",
  },
  {
    artist: "BLACKPINK",
    title: "불장난",
    src: "BLACKPINK/Girl'sPop_불장난-BLACKPINK",
  },
  {
    artist: "오마이걸(OH MY GIRL)",
    title: "불꽃놀이 (Remember Me)",
    src: "OH MY GIRL/Girl'sPop_불꽃놀이 (Remember Me)-오마이걸(OH MY GIRL)",
  },
  {
    artist: "이달의 소녀",
    title: "Heart Attack (츄)",
    src: "이달의 소녀/Girl'sPop_Heart Attack (츄)-이달의 소녀",
  },
];

function search() {
  let userInputValue = userInput.value.toUpperCase();

  while (autocomplete_list.hasChildNodes()) {
    autocomplete_list.removeChild(autocomplete_list.firstChild);
  }

  if (userInputValue === "") {
    return false;
  }

  if (searchOption.value === "Artist") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].artist.toUpperCase().indexOf(userInputValue) > -1) {
        const autocomplete_list_item = document.createElement("li");
        const autocomplete_list_item_anchor = document.createElement("a");
        autocomplete_list_item.className = "autocomplete_list_item";
        autocomplete_list_item_anchor.className =
          "autocomplete_list_item_anchor";
        autocomplete_list_item_anchor.href = `https://vlyly.github.io/girlgroups-pop/${data[i].src}.html`;
        autocomplete_list_item_anchor.innerText = `${data[i].title}-${data[i].artist}`;
        autocomplete_list_item.appendChild(autocomplete_list_item_anchor);
        autocomplete_list.appendChild(autocomplete_list_item);
      }
    }
  }

  if (searchOption.value === "Title") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].title.toUpperCase().indexOf(userInputValue) > -1) {
        const autocomplete_list_item = document.createElement("li");
        const autocomplete_list_item_anchor = document.createElement("a");
        autocomplete_list_item.className = "autocomplete_list_item";
        autocomplete_list_item_anchor.className =
          "autocomplete_list_item_anchor";
        autocomplete_list_item_anchor.href = `https://vlyly.github.io/girlgroups-pop/${data[i].src}.html`;
        autocomplete_list_item_anchor.innerText = `${data[i].title}-${data[i].artist}`;
        autocomplete_list_item.appendChild(autocomplete_list_item_anchor);
        autocomplete_list.appendChild(autocomplete_list_item);
      }
    }
  }

  if (!autocomplete_list.hasChildNodes()) {
    autocomplete_list.appendChild(autocomplete_list_item_no_result);
  }
}

function changePlaceholder() {
  while (autocomplete_list.hasChildNodes()) {
    autocomplete_list.removeChild(autocomplete_list.firstChild);
  }

  if (searchOption.value === "Artist") {
    userInput.placeholder = "아티스트명으로 검색";
  } else {
    userInput.placeholder = "제목으로 검색";
  }
}

userInput.addEventListener("keyup", search);
searchOption.addEventListener("change", changePlaceholder);
