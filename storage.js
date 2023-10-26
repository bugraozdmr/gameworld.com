class Storage{
    addGameToStorage = function(game){
        let games = this.getGamesFromStorage();
        
        games.push(game);
        
        localStorage.setItem("games",JSON.stringify(games));
    }

    getGamesFromStorage = function(){
        let games;

        if(localStorage.getItem("games") === null){
            games = [];
        }
        else{
            games = JSON.parse(localStorage.getItem("games"));
        }

        return games;
    }

    clearFromStorage = function(gameTitle){
        let games = this.getGamesFromStorage();
        // splite arrayden silme islemi
        games.forEach(function(game,index){
            // liste donduruyor ondan title degiskeni alinsin bu listeden
            if(game.name === gameTitle){
                games.splice(index,1);
            }
        });

        localStorage.setItem("games",JSON.stringify(games));
    }

}