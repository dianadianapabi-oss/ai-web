function upload() {
  let file = document.getElementById("video").files[0];

  if (!file) {
    alert("Pilih video dulu!");
    return;
  }

  document.getElementById("status").innerText =
    " diupload... (AI proses)";
}
