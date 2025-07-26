import prompt from 'prompt';

import mainPrompt from "./prompt/prompt-main.js"

(async function main(){
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) console.log("Escolheu QRCode")
        if(choose.select == 2) console.log("Escolheu Password")
    })
    prompt.start();
}())