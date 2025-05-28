const express = require("express");
const app = express();
require("dotenv/config")

const cors = require("cors");
const { default: mongoose } = require("mongoose");

app.use(cors({ origin: true }));
app.use(express.json());


app.get("/", (req, res) => {
    return res.json("chào đằng ấy...")
});

// user authentication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// Artist Routes
const artistsRoutes = require("./routes/artist");
app.use("/api/artists/", artistsRoutes);

// Albums Routes
const albumRoutes = require("./routes/albums");
app.use("/api/albums/", albumRoutes);

// Songs Routes
const songRoutes = require("./routes/songs");
app.use("/api/songs/", songRoutes);

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
    .once("open", () => console.log("Connected"))
    .on("error", (error) => {
        console.log('ERROR : ${error}');
    })

app.listen(4000, () => console.log("Listeningto to port 4000"));


const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.DB_STRING);

async function listCollections() {
    try {
        // Kết nối tới MongoDB Atlas
        await client.connect();
        console.log("✅ Đã kết nối thành công tới MongoDB Atlas");

        const db = client.db("test"); // Đặt tên DB bạn muốn kiểm tra
        const collections = await db.listCollections().toArray();

        console.log("📂 Danh sách collection:");
        collections.forEach((collection) => {
            console.log(" -", collection.name);
        });
        // const documents = await db.collection("users").find({}).toArray();
        // console.log("📄 Danh sách documents trong collection 'users':");
        // documents.forEach((doc) => {
        //     console.log(" -", doc);
        // });
    } catch (error) {
        console.error("❌ Lỗi kết nối hoặc lấy dữ liệu:", error.message);
    } finally {
        await client.close();
    }
}

listCollections();