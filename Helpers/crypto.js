const crypto = require('crypto');
const { join } = require('path');
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY
const IV_LENGTH = 16;

// Encryptio key :- 
module.exports = {
    encrypt : function(text){
        let iv = crypto.randomBytes(IV_LENGTH)
        let key = crypto.createHash('sha256').update(String(process.env.CRYPTO_KEY)).digest('base64').substring(0,32);
        let cipher = crypto.createCipheriv('aes256',key,iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted,cipher.final()]);
        return iv.toString('hex') + ':' + encrypted.toString('hex');
    },
    decrypt: function(text){
        let textParts = text.split(':')
        let iv = Buffer.from(textParts.shift(),'hex')
        let encryptedText = Buffer.from(textParts.join(':'),'hex');
        let key = crypto.createHash('sha256').update(String(process.env.CRYPTO_KEY)).digest('base64').substring(0,32);
        let decipher = crypto.createDecipheriv('aes-256-cbc',key,iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted,decipher.final()])
        return decrypted.toString();
    }
}


