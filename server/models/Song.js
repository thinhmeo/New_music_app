const mongoose = require("mongoose");

const songSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        songURL: {
            type: String,
            required: true,
        },
        album: {
            type: String, // sử dụng String thay vì ObjectId để lưu tên album
            required: true,
        },
        artist: {
            type: String, // sử dụng String thay vì ObjectId để lưu tên nghệ sĩ
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("song", songSchema);
