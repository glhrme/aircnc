//Resolve o multiform
const multer = require('multer');
const path = require('path');

module.exports = {
    //Onde ele irá salvar
    storage: multer.diskStorage({
        //Destino, sendo que o path.resolve irá configurar as barras oara mim
        destination: path.resolve(__dirname, '..','..','uploads'),
        //Nome do arquivo sendo configurado
        filename: (req, file, cb)=>{
            //Selecionando a extensão do arquivo
            const ext = path.extname(file.originalname);
            //Pega o nome do arquivo, retira a extensão e salva
            const name = path.basename(file.originalname, ext);

            //Callback
            cb(null,`${name}-${Date.now()}${ext}`)
        },
    }),
}