import prompt from 'prompt';

import PromptSchemaMain from "./prompt-schema/prompt-schema-main.js"

import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js';

(async function main(){
    prompt.get(PromptSchemaMain, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    })
    prompt.start();
}())