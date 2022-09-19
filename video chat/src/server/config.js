const config = {
    db_uri:`mongodb+srv://maxo:Alterego1@cluster0.gxrbuxz.mongodb.net/?retryWrites=true&w=majority`,
    port: process.env.PORT || 3000,
    host: process.env.HOST || "http://localhost",
    public_route: process.env.PUBLIC_ROUTE || "app",
    token_secret:"TGDMPFCNLRPVTB"
}
console.log(config)
module.exports = config