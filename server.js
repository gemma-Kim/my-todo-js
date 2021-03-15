const http = require("http")
const app = require("./app")
const prisma = require("./models")
const server = http.createServer(app)

const serverStart = async () => {
    try {
        server.listen(8000, () => console.log("Server Started"))
    } catch (err) {
        throw err
    } finally {
        await prisma.$disconnect()
    }
}

serverStart()