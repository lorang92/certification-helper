importScripts('lib.js');

onmessage = function (msg){
    sleep(1000);
    this.postMessage(msg.data.toUpperCase());

    //this.close();
}
