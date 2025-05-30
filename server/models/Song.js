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
        // dùng ObjectId để liên kết với album thay vì String
        album: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "album",
        },
        artist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Artist",
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