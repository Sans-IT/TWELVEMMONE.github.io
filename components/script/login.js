// Show Password
function showpass(){
    const Showpass = document.getElementById('password');
    if (Showpass.type === "password"){
        Showpass.type = "text";
    } else {
        Showpass.type = "password";
    }
    return Showpass;
}

// user & pass Validation readJSON
function validValue(){
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    const result = document.getElementById('result');
    const file = "./components/script/data.json";

    // $.getJSON(file,function(data){
    //     for(var i = 0; i < data.length;i++){
    //         if (data[i].nama === username.value){
    //             if (data[i].password === password.value)
    //             {
    //                 window.location.href = "./Kelas/XIIMM1/index.html";
    //             } else {
    //                 result.innerHTML = "Password yang kamu masukkan salah!";
    //             }
    //         } else {
    //             result.innerHTML = `Tidak ada akun dengan nama tersebut! 
    //             <br>
    //             <a target="_blank" href="https://wa.me/+6285814162973" class="text-primary">klik disini untuk kontak Teknisinya</a>`;
    //         }
    //     }

    fetch(file)
    .then((responses) => responses.json())
    .then((data) => {

    data.forEach(n => {
        if (n.nama === username.value && n.password === password.value){
            // Benar
            result.innerHTML = ``
            window.location.href = ".TWELVEMMONE.github.io/Kelas/XIIMM1/";
        } else {
            // Salah
            result.innerHTML = `
            Username / Password salah
            <br>
            <a target="_blank" href="https://wa.me/+6285814162973" class="text-primary">klik disini untuk sign in / kontak Teknisinya</a>`;
        } 
    });


    // https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6

    // for(var i = 0; i < data.length;i++){
    //     if (data[i].nama === username.value){
    //         if (data[i].password === password.value)
    //         {
    //             result.innerHTML = "";
    //             window.location.href = "../../Kelas/XIIMM1/index.html";
    //         } else {
    //             result.innerHTML = "Password yang kamu masukkan salah!";
    //         }
    //     } else {
    //         result.innerHTML = `Tidak ada akun dengan nama tersebut! 
    //         <br>
    //         <a target="_blank" href="https://wa.me/+6285814162973" class="text-primary">klik disini untuk kontak Teknisinya</a>`;
    //     }
    // }

    })
    .catch((err) => console.log(err));
}