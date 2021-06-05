var express = require("express");
var auth = require("./auth");
var verifikasi = require("./verifikasi");
var router = express.Router();

// daftarkan menu registrasi
router.post("/api/v1/register", auth.registrasi);
router.post("/api/v1/login", auth.login);

// alamat yg perlu otorisasi
// router.get("/api/v1/rahasia", verifikasi(), auth.halamanrahasia);
router.get("/api/vi/admin/mahasiswa", verifikasi(1), auth.adminmahasiswa);

module.exports = router;
