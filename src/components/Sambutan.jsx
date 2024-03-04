/* eslint-disable no-irregular-whitespace */
import React, { useState } from 'react';

const Sambutan = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='sm:px-20 py-10'>
      <div className='font-bold text-lg'>
        <div className='text-primary text-xl'>
          Tentang
        </div>
        SPBE Kabupaten Malang
      </div>
      <div>
        <div className='py-6'>
        Menuju Tata Kelola Pemerintahan yang Bersih, Efektif, dan Akuntabel
        </div>
        <div className='pb-5' style={{ textAlign: 'justify'}}>
        Pemerintah Kabupaten Malang berkomitmen untuk menghadirkan tata kelola pemerintahan yang lebih baik melalui penerapan Sistem Pemerintahan Berbasis Elektronik (SPBE). SPBE merupakan pemanfaatan teknologi informasi dan komunikasi untuk memberikan layanan kepada masyarakat secara lebih efektif, transparan, dan akuntabel.
          {expanded && (
            <>
            
           
            
            <p style={{ marginTop:20 }}><strong>Manfaat SPBE bagi Masyarakat Kabupaten Malang:</strong></p>
<br />
<ol>
	<li style={{ marginTop:10 }}><strong>1. Pelayanan publik yang lebih mudah dan cepat:</strong>&nbsp;Masyarakat dapat mengakses berbagai layanan publik, seperti perizinan, kependudukan, dan pendidikan, secara online tanpa harus datang ke kantor pemerintahan.</li>
  
	<li style={{ marginTop:10 }}><strong>2. Pemerintahan yang lebih transparan:</strong>&nbsp;Masyarakat dapat memantau kinerja pemerintah dan penggunaan anggaran daerah secara online.</li>
  
	<li style={{ marginTop:10 }}><strong>3. Peningkatan efisiensi dan efektivitas:</strong>&nbsp;SPBE dapat membantu pemerintah dalam mengelola sumber daya dan menyelesaikan tugas-tugas dengan lebih efisien dan
 efektif.</li>
</ol>
<br />
<p><strong>Beberapa contoh penerapan SPBE di Kabupaten Malang:</strong></p>
<br />
<ol>
	<li style={{ marginTop:10 }}><strong>1. Layanan Perizinan Online:</strong>&nbsp;Masyarakat dapat mengurus izin usaha dan berbagai perizinan lainnya secara online melalui aplikasi SIPD.</li>
	<li style={{ marginTop:10 }}><strong>2. Layanan Kependudukan Online:</strong>&nbsp;Masyarakat dapat mencetak KTP elektronik, akta kelahiran, dan dokumen kependudukan lainnya secara online melalui aplikasi Dispendukcapil.</li>
	<li style={{ marginTop:10 }}><strong>3. Sistem Pengaduan Online:</strong>&nbsp;Masyarakat dapat menyampaikan pengaduan dan keluhan terkait pelayanan publik melalui aplikasi Lapor!.</li>
</ol>

<p style={{ marginTop:20 }}>Pemerintah Kabupaten Malang terus berkomitmen untuk mengembangkan dan meningkatkan SPBE. Dengan SPBE, diharapkan tata kelola pemerintahan di Kabupaten Malang menjadi lebih baik dan masyarakat dapat merasakan manfaatnya secara langsung. Mari bersama-sama mendukung SPBE untuk membangun Malang yang lebih baik!</p>

            </>
          )}
        </div>
        <button onClick={handleExpand} className="btn btn-sm px-8 text-white btn-primary">
          {expanded ? 'Tutup' : 'Selengkapnya'}
        </button>
      </div>
    </div>
  );
};

export default Sambutan;
