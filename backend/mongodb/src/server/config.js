const config = {
    db_url:"mongodb+srv://emmanuel:baby@cluster0.rhqo6qo.mongodb.net/?retryWrites=true&w=majority",
    port: process.env.PORT || 3001,
    host:process.env.HOST || "http://localhost",
    public_route: process.env.PUBLIC_ROUTE || "app"
}

module.exports = config