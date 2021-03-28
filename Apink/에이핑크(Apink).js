const song_information_button = document.getElementById(
  "song_information_button"
);
const album_information_button = document.getElementById(
  "album_information_button"
);
const song_information = document.getElementById("song_information");
const album_information = document.getElementById("album_information");
const lyrics_control_button = document.getElementById("lyrics_control_button");
const lyrics = document.getElementById("lyrics");

function control_song_information() {
  album_information_button.classList.remove(
    "selected_button_backgroundColor_Apink"
  );
  song_information_button.classList.add(
    "selected_button_backgroundColor_Apink"
  );
  album_information.style.display = "none";
  song_information.style.display = "";
}

function control_album_information() {
  song_information_button.classList.remove(
    "selected_button_backgroundColor_Apink"
  );
  album_information_button.classList.add(
    "selected_button_backgroundColor_Apink"
  );
  song_information.style.display = "none";
  album_information.style.display = "";

  lyrics_control_button.title = "가사 더 보기";
  lyrics.classList.add("hidden_lyrics");
  lyrics_control_button.firstChild.classList.remove("fa-chevron-up"); //lyrics, lyrics_control_button 초기 상태로 되돌림
}

function control_lyrics() {
  lyrics_control_button.title === "가사 더 보기"
    ? (lyrics_control_button.title = "가사 접기")
    : (lyrics_control_button.title = "가사 더 보기");
  lyrics.classList.toggle("hidden_lyrics");
  lyrics_control_button.firstChild.classList.toggle("fa-chevron-up");
}

song_information_button.addEventListener("click", control_song_information);
album_information_button.addEventListener("click", control_album_information);
lyrics_control_button.addEventListener("click", control_lyrics);
