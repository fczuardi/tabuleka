function init(){
    var roomName = window.location.href.match(/.*\/(.*)/)[1]
        socket = io('http://localhost/' + roomName);
    console.log('foo', roomName);
}
