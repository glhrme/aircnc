const Booking = require('../models/Booking');

module.exports = {
    async store (req, res){
        try {

            const { user_id } = req.headers;
            const { spot_id } = req.params;
            const { date } = req.body;

            const booking = await Booking.create({
                user: user_id,
                spot: spot_id,
                date,
            });

            //Populando os relacionamentos criados no mongo
            await booking.populate('spot').populate('user').execPopulate();

            return res.status(200).json(booking);

        } catch (error) {
            return res.status(500).json(error);
        }
    }
}