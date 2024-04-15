import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBeritaById } from "../constants";
import styles from "../style";
import { Navbar, Homlay, Footer, Media } from "../components";

const ArtikelBerita = () => {
  const { id } = useParams(); // Menangkap ID berita dari URL
  const [berita, setBerita] = useState(null);

  useEffect(() => {
    // Mengambil data berita berdasarkan ID dari API saat komponen dimuat
    async function fetchBerita() {
      try {
        const data = await getBeritaById(id);
        setBerita(data);
      } catch (error) {
        console.error("Error fetching berita:", error);
      }
    }
    fetchBerita();
  }, [id]); // Memanggil useEffect lagi jika ID berita berubah

  // Menampilkan pesan loading jika data sedang diambil
  if (!berita) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} sm:${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}  `}>
          <Navbar />
        </div>
      </div>

      <div
        className={`${styles.flexStart} bg-gradient-to-r from-rose-900 from-5% via-red-700 via-2% to-red-500 to-90%`}
      >
        <div className={`${styles.boxWidth}`}></div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div>
            <h6 className="text-lg font-bold border-4 border-solid border-white border-b-primary py-5 pe-40">
              Berita Terkini
            </h6>
            <div className="pt-10">
              <div className="mb-4">
                <h1 className="text-5xl font-bold">{berita.title}</h1>
                <p className="text-gray-500 mt-5">Tanggal:  {new Date(berita.updated_at).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</p>
              </div>

              <div className="mb-4">
                {/* Gambar Berita */}
                <img
                   src={berita.image.replace(
                    "http://127.0.0.1:8000/C:\\xampp\\htdocs\\magang-backend\\public\\",
                    "/storage/"
                  )}
                  alt="Gambar Berita"
                  className="rounded-lg"
                  style={{ width: "1000px" }}
                />
              </div>

              <div>
                <p
                  className="text-gray-700 mt-10 text-lg"
                  style={{ textAlign: "justify" }}
                >
                  {berita.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenter} mt-5`}
        style={{ backgroundColor: "#DF4141" }}
      >
        <div className={`${styles.boxWidth} text-white`}>
          <Media />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ArtikelBerita;
