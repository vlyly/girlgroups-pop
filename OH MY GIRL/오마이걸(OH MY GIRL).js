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
    "selected_button_backgroundColor_OH_MY_GIRL"
  );
  song_information_button.classList.add(
    "selected_button_backgroundColor_OH_MY_GIRL"
  );
  album_information.style.display = "none";
  song_information.style.display = "";
}

function control_album_information() {
  song_information_button.classList.remove(
    "selected_button_backgroundColor_OH_MY_GIRL"
  );
  album_information_button.classList.add(
    "selected_button_backgroundColor_OH_MY_GIRL"
  );
  song_information.style.display = "none";
  album_information.style.display = "";
}

function control_lyrics() {
  lyrics.classList.toggle("hidden_lyrics");
  lyrics_control_button.firstChild.classList.toggle("fa-chevron-up");
}

song_information_button.addEventListener("click", control_song_information);
album_information_button.addEventListener("click", control_album_information);
lyrics_control_button.addEventListener("click", control_lyrics);
