module.exports = {
    async store (req, res){
        console.log(req.body);
        console.log(req.file);
        return res.status(200).json({ok: true});
    }
}