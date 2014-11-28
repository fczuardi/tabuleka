function generateRoomNameAndGo(){
    var characters = "abcdefghijklmnopqrstuvwxyz1234567890",
        stringLength = 5,
        generatedName = '';
    for (var i=0; i < stringLength; i++){
        generatedName += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    console.log('/game/' + generatedName);
    window.location.href = '/game/' + generatedName;
    return false;
}
