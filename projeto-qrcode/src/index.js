import prompt from 'prompt';

import mainPrompt from "./prompt/prompt-main.js"
import createQRCode from './services/qr-code/create.js';

(async function main(){
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) console.log("Escolheu Password")
    })
    prompt.start();
}())