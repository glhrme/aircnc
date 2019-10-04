const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async index(req, res) {
        try {
            let { tech } = req.query;
            
            let spot;

            if(tech){
                console.log(tech)
                spot = await Spot.find({ techs: tech });
            } else {
                console.log("Tech não informado");
                spot = await Spot.find({});
            }

            return res.status(200).json({ success: spot });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    },

    async store(req, res) {
        try {
            const { filename } = req.file;
            const { company, techs, price } = req.body;
            const { user_id } = req.headers;

            const user = await User.findById(user_id);

            if (!user)
                return res.status(400).json({ error: "User not found" });


            const spot = await Spot.create({
                user: user_id,
                company: company,
                //Split está separando cada palavra através da virgula e o map está percorrendo o array e tirando os espacos
                techs: techs.split(',').map(tech => tech.trim()),
                price: price,
                thumbnail: filename
            });

            return res.status(200).json({ success: spot });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
}