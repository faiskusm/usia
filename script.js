```javascript
$(document).ready(function () {

    // Tombol PROSES
    $("#proses").click(function () {

        let nama = $("#nama").val().trim();
        let usia = $("#usia").val();

        // Memeriksa apakah nama dan usia sudah diisi
        if (nama === "" || usia === "") {
            alert("Nama dan usia harus diisi!");
            return;
        }

        usia = Number(usia);

        // Memeriksa apakah usia merupakan angka yang valid
        if (!Number.isFinite(usia) || usia < 0) {
            alert("Usia harus berupa angka yang valid!");
            return;
        }

        // Memeriksa apakah pengunjung berusia minimal 27 tahun
        if (usia >= 27) {
            $("#pesan").text("HELLO, " + nama + "! ANDA BOLEH MASUK");
        } else {
            $("#pesan").text("MAAF, " + nama + "! ANDA TIDAK BOLEH MASUK");
        }

        // Menampilkan dialog
        $("#overlay").css("display", "flex");
    });

    // Tombol CLEAR
    $("#clear").click(function () {
        $("#nama").val("");
        $("#usia").val("");
        $("#nama").focus();
    });

    // Tombol OK untuk menutup dialog
    $("#ok").click(function () {
        $("#overlay").hide();
    });

});
```