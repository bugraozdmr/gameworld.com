// inputlar
const nameInput = document.getElementById("isim");
const categoryInput = document.getElementById("category");
const gbInput = document.getElementById("gb");
const urlInput = document.getElementById("url");
// button
const form = document.getElementById("game-form");
// kullanılacak objeler olusturulsun 
const ui = new UI();
const storage = new Storage();
// card deck
const cardDeck = document.querySelector(".card-deck");

// flag variable
let result1;


// tum eventleri yukleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addGame);

    // oyunlari yukleme baslayinca
    document.addEventListener("DOMContentLoaded",function(){
        let games = storage.getGamesFromStorage();
        ui.loadAllGames(games);
    });

    // cardDeck.addEventListener("click",ui.clearFromUI);

    
}


function addGame(e){
    const name = nameInput.value;
    const category = categoryInput.value;
    const url = urlInput.value;
    const gb = gbInput.value;

    if(name === "" || category === "" || gb === "" || url === ""){
        ui.showAlert("Doldurulmamış alanlar var !","danger");
    }
    // gb değeri kontrol
    else if(isNaN(gb)){
        ui.showAlert("GB değeri sayısal olmalıdır","warning");
    }
    else{
        const game = new Game(name,category,gb,url);
        
        ui.addGameToUI(game);
        storage.addGameToStorage(game);
        ui.clearInputs(nameInput,categoryInput,urlInput,gbInput);

        ui.showAlert("Oyun eklendi","success");
    }


    // submit isleminde preventDefault eklenmek zorunda
    e.preventDefault();
}






// fanct yes or no

// Yes button click event
document.getElementById("confirmYesButton").addEventListener("click", function(){
    // simdi result1'i fonksiyonda test edecegiz
    result1 = ui.yesOrNo();

    // flag deger result1
    ui.clearFromUI(deleteA,result1);

    // console.log(result1);
});
  


// flag degisken
let deleteA;

// "Clear Films" butonu için tıklama olayı
cardDeck.addEventListener("click", function(e) {
    // Onay penceresini aç
    // ve evet hayıra tıklamadığın sürece kaybolma olmayacak
    if(e.target.className === "fa fa-remove"){
        deleteA = e;
        $('#exampleModalCenter').modal('show');
    }
});





//! sonra duzeltilebilir search bar icin


// document.getElementById('search-form').addEventListener('submit', function (e) {
//     e.preventDefault(); // Formun varsayılan davranışını engelle

//     const searchTerm = document.getElementById('search-input').value;
//     console.log(searchTerm)
//     const searchResults = document.getElementById('search-results');

//     // Arama sonuçlarını dinamik olarak oluşturun
//     const resultItems = ['One', 'Two', 'Three', 'Four', 'Five']; // Örnek sonuçlar
//     const resultList = document.createElement('ul');

//     resultItems.forEach(function (result) {
//         const listItem = document.createElement('li');
//         listItem.textContent = result;
//         resultList.appendChild(listItem);
//     });

//     // <ul> (liste) öğesini sonuçları gösterecek <div> öğesine ekleyin
//     searchResults.innerHTML = ''; // Önceki sonuçları temizle
//     searchResults.appendChild(resultList);
// });
