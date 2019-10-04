
const Spots = require('../models/Spot');

module.exports = {
    async show(req, res) {
        var spots = null;
        try {
            const { user_id } = req.headers;

            spots = await Spots.find({ user: user_id });

            return res.json({ success: spots });
        } catch (error) {
            return res.json({ error: error, spots:spots });
        }
    }

}