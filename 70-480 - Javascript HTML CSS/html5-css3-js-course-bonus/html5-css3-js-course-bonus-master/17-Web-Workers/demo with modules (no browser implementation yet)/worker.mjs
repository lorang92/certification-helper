import { sleep } from './lib.mjs';

onmessage = function(e) {
    sleep(1000);
    this.postMessage(e.data.toUpperCase());

    //this.close();
}