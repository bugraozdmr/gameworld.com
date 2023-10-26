class UI{
    // alert func
    showAlert = function(message, alertType){
    
        var alertContainer = document.getElementById("alert-container");
        var alertDiv = document.createElement("div");
        
        // farkli şeyler denemek istedim mesela basınca alert kapancaktı vs ama olmadı
    
        alertDiv.className = "alert alert-" + alertType + " alert-dismissible fade show";
        alertDiv.innerHTML = message;
    
        alertContainer.appendChild(alertDiv);
    
    
        // Belirli bir süre sonra alerti otomatik olarak kaldırmak için
        setTimeout(function() {
            alertDiv.remove();
        }, 2000);
    }

    addGameToUI = function(game){
        // cardList
        const cardList = document.querySelector(".card-deck");

        cardList.innerHTML += `
        <div class="card">
            <img class="card-img-top" src="${game.url}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">Oyun hafızada ${game.gb} Gb yer kaplıyor</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <small class="text-muted">Oyun kategori : ${game.category}</small>
                <a href = "#" class ="delete-item">
                    <i class = "fa fa-remove"></i>
                </a>
            </div>
        `;
    }

    clearInputs = function(a,b,c,d){
        a.value = "";
        b.value = "";
        c.value = "";
        d.value = "";
    }

    loadAllGames = function(gamesList){
        localStorage.setItem("games",JSON.stringify(gamesList));
        const cardList = document.querySelector(".card-deck");

        // console.log(games);
        gamesList.forEach(function(game){
            cardList.innerHTML += `
            <div class="card">
                <img class="card-img-top" src="${game.url}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${game.name}</h5>
                    <p class="card-text">Oyun hafızada ${game.gb} Gb yer kaplıyor</p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <small class="text-muted">Oyun kategori : ${game.category}</small>
                    <a href = "#" class ="delete-item">
                        <i class = "fa fa-remove"></i>
                    </a>
                </div>
            `;

        });
    }


    clearFromUI = function(e,result){
        
        if(result === 1){
            // 3 kere yukarı gitmem lazım
            e.target.parentElement.parentElement.parentElement.remove();
        
            const card = e.target.closest(".card");
            const cardTitle = card.querySelector(".card-title").textContent;
            // console.log(cardTitle)
    
            let storage = new Storage();
            storage.clearFromStorage(cardTitle);
        
            
        }
       
    }


    yesOrNo = function() {
        // Evet seçildiğinde yapılacak işlemler buraya yazılabilir
        // Sonuç olarak 1 dönebilirsiniz
        // Örnek olarak 1 dönüyoruz
        
        // Onay penceresini kapat
        $('#exampleModalCenter').modal('hide');
      
        // Sonucu kullan
        return 1;
        
        
      }
}




//! yukardan acilan emin misin kutularının mantığı
/*

Öncelikle model.show açılsın o fix
sonrasında bir şeye basılmadığı sürece zaten sorun olmaz 
hayır ya da ekran dışına basılırsa sorunsuz kapanır
addEventListener evet tuşu için yazılmıştır
bir tane 1 e esitleyecegimiz deger olustur
Evet e basılınca result 1 olcak sonra asıl fonk çalışsın
ve oraya yollanacak bir degerde bizim flag variablemiz olcaktır
callback(result1)
bu o fonksiyonda 1 gonderdiysek calis demek yoksa calismaz zaten

*/