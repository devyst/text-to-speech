let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("#voiceSelect");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();

    // Memeriksa apakah ada pilihan suara.
    if (voices.length > 0) {
        speech.voice = voices[0];

        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
        voiceSelect.style.display = "block"; // Menampilkan elemen select
    } else {
        // Tidak ada pilihan suara yang tersedia, sembunyikan elemen select.
        voiceSelect.style.display = "none";
        alert("Tidak ada suara yang tersedia di perangkat ini.");
        // Anda juga dapat menonaktifkan tombol atau mengambil tindakan lain sesuai kebutuhan.
    }
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

