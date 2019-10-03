//Tudo que for referente a sessões (login, registro, logout)

//index, show, store, update, destroy

/*

    Index = Listar sessões
    Show = Retornar apenas uma
    Store = Criar uma sessão
    Update = alterar uma sessão
    Destroy = excluir uma sessão

*/

const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;
        
        //Busca um usuário com aquele email
        let user = await User.findOne({ email });

        //Se não encontrar nada, ele cria o usuário
        if(!user){
            user = await User.create({ email });
        }
        
        //const user = await User.create({ email });

        return res.json(user);
    }
};