import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

import Swal from "sweetalert2";

import { Helmet } from "react-helmet";
import "./Registrasi.css";

export const Registrasi = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Mengambil semua input di dalam form
    const formData = new FormData(form.current);

    // Menyaring semua data form dan memeriksa apakah ada yang kosong
    let isValid = true;
    formData.forEach((value) => {
      if (!value) {
        isValid = false;
      }
    });

    if (!isValid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mohon isi semua data sebelum Submit",
      });
      return;
    }

    emailjs
      .sendForm("service_6358u2u", "template_7u3wppn", form.current, {
        publicKey: "j6yy53RV4AE6ra1P2",
      })
      .then(
        () => {
          // Jika berhasil, tampilkan alert sukses
          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Data berhasil dikirim.",
          });
          form.current.reset(); // Reset form setelah sukses
        },
        (error) => {
          // Jika gagal, tampilkan alert error
          console.log("FAILED...", error.text);
          Swal.fire({
            icon: "error",
            title: "Gagal!",
            text: "Terjadi kesalahan, silakan coba lagi.",
          });
        },
      );
  };

  return (
    <React.Fragment>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Registrasi Siswa Baru • Les Privat & Supercamp UTBK SNBT • Undip Unair Unpad UB Udayana Simak UI & CBT UGM • Online & Guru Datang ke Rumah"
        />
        <title>
          Registrasi Siswa Baru • Les Privat & Supercamp UTBK SNBT • Undip Unair
          Unpad UB Udayana Simak UI CBT UGM & UM PTN • Online & Guru Datang ke
          Rumah
        </title>
        <link
          rel="canonical"
          href="
https://supercampui.com/registrasi"
        />
      </Helmet>

      <h1 className="supertitle-registrasi">Registrasi Siswa Baru</h1>
      <form className="container-form" ref={form} onSubmit={sendEmail}>
        <div className="superparent-form-1">
          <div className="parent-form">
            <h1 className="title-form-email">Data Personal Siswa</h1>
            <label className="label-form">Jurusan SMA/SMK</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan jurusan..."
              type="text"
              name="from_jurusan"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Name Lengkap</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan nama lengkap..."
              type="text"
              name="from_nama"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Jenis Kelamin</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan jenis kelamin..."
              type="text"
              name="from_jeniskelamin"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Tempat & Tanggal Lahir</label>
            <input
              className="form-input-resgitrasi"
              placeholder="Contoh : Jakarta, 6 April 1999"
              type="text"
              name="from_tempattanggallahir"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Agama</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan agama..."
              type="text"
              name="from_agama"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Nomor HP</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan nomor hp..."
              type="number"
              name="from_nomorhp"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Email</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan email..."
              type="email"
              name="from_email"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Asal Sekolah</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan asal sekolah..."
              type="text"
              name="from_asalsekolah"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">NISN</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan NISN..."
              type="text"
              name="from_nisn"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Alamat Lengkap</label>
            <textarea
              className="input-textarea"
              placeholder="masukan alamat lengkap..."
              name="message"
            />
          </div>
        </div>

        <div className="superparent-form-1">
          <div className="parent-form">
            <h1 className="title-form-email">
              Data Orang Tua / Penanggung Jawab
            </h1>
            <label className="label-form">Nama Ibu</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan nama ibu..."
              type="text"
              name="from_namaibu"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Nama Ayah</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan nama ayah..."
              type="text"
              name="from_namaayah"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">No HP Ibu</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan no hp ibu..."
              type="number"
              name="from_nohpibu"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">No HP Ayah</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan no hp ayah..."
              type="number"
              name="from_nohpayah"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Email Orangtua</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan email orangtua..."
              type="email"
              name="from_emailortu"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Pekerjaan Ibu</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan pekerjaan ibu..."
              type="text"
              name="from_pekerjaanibu"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Pekerjaan Ayah</label>
            <input
              className="form-input-resgitrasi"
              placeholder="masukan pekerjaan ayah..."
              type="text"
              name="from_pekerjaanayah"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Alamat Lengkap Orangtua</label>
            <textarea
              className="input-textarea"
              placeholder="masukan alamat lengkap..."
              name="alamatortu"
            />
          </div>
        </div>

        <div className="superparent-form-1">
          <div className="parent-form">
            <h1 className="title-form-email">
              Data Pilihan Jurusan & Universitas
            </h1>
            <label className="label-form">Universitas & Jurusan 1</label>
            <input
              className="form-input-resgitrasi"
              placeholder="Kedokteran - Universitas Gadjah Mada"
              type="text"
              name="from_univjurusan1"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Universitas & Jurusan 2</label>
            <input
              className="form-input-resgitrasi"
              placeholder="Akuntansi - Universitas Indonesia"
              type="text"
              name="from_univjurusan2"
            />
          </div>
          <div className="parent-form">
            <label className="label-form">Catatan Khusus</label>
            <textarea
              className="input-textarea"
              placeholder="tambahkan catatan..."
              name="catatankhusus"
            />
          </div>
        </div>
        <input className="btn-input-resgitrasi" type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};
