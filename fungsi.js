function tampilkanPesan() {
    var nama = document.getElementById("nama").value;
    var pesan = document.getElementById("pesan");
    var muncul = document.getElementById("muncul");
    var formElement = document.getElementById("data");
    var containerElement = document.getElementById("container");
    var lanjut = document.getElementById("lanjut");
  
    if (nama !== "") {
      // pesan.innerHTML = "";
      pesan.innerHTML = "Halooooo " + nama + " kesayangankuu," + " Love Youu hehe" + " 😁❤❤";
  
      // untuk menyembunyikan element
      formElement.classList.add('hidden');
  
      containerElement.classList.add('hidden');
  
      pesan.classList.remove('hidden');
  
      lanjut.classList.remove('hidden');
    } else {
      alert(
        "isi duluuuuu, buat jee salah satu panggilan dari opet ganteng mu ini😄🗿👍"
      );
    }
  
  
    return false;
  }


function pesan() {
    alert("maaf, tombol ini rusak.. silahkan pencet tombol sebelahnya 😁🙏");
}