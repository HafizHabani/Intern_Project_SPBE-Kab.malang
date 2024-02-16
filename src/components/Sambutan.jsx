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
          Sambutan
        </div>
        Bupati Kabupaten Malang
      </div>
      <div>
        <div className='py-6'>
          Assalamualaikum Wr. Wb.
        </div>
        <div className='pb-5' style={{ textAlign: 'justify'}}>
          Puji syukur kita panjatkan kehadirat Allah SWT yang telah melimpahkan rahmat dan hidayahnya, sehingga
          Pemerintah Kabupaten Malang bisa menghadirkan portal SPBE Kabupaten Malang. Portal ini sekaligus menandai 
          Kick Off Akselerasi Implementasi SPBE (Sistem Pemerintahan Berbasis Elektronik) Kabupaten Malang di Era 
          Society 5.0. SPBE pada era sekarang bukan sesuatu pilihan tetapi merupakan suatu keharusan dalam mendukung 
          pengelolaan dan penyelenggaran Pemerintahan. Seperti disampaikan Menteri Pendayaagunaan ApararaturNegara dan 
          Reformasi Birokrasi (MENPANRB) Republik Indonesia bahwa diperlukan penguatan SPBE melalui penerapan 
          Reformasi Birokrasi Tematik 
          {expanded && (
            <>
            . Harapannya terciptanya birokrasi tangkas dan pelayanan publik berbasis digital untuk memudahkan rakyat yang berbasis struktur digital, budaya digital dan kompetensi digital pada birokrasi. Sehingga akan mewujudkan penerapan sistem kerja yang fleksibel. Fleksibilitas ini memungkinkan ASN bisa melaksanakan tugas di kantor maupun di rumah dan sistem kerja tersebut memerlukan dukungan TIK yang memadai agar roda pemerintahan dan pelayanan publik tetap berjalan dengan baik. Penerapan SPBE Kabupaten Malang menjadi kunci dalam penegelolaan dan penyelenggaraan pemerintahan dan pelayanan publik yang berkinerja tinggi, oleh karena itu Saya mengajak seluruh jajaran Pemkot Kabupaten Malang mulai dari diri saya sendiri dan Bapak Sekda sekaligus Ketua Tim Koordinasi SPBE, hingga staf dan Non ASN yang ada di Pemkot Semarang mulai tayang portal ini sekaligus kita Kick Off untuk akselerasi Implementasi SPBE Kabupaten Malang. Saya berharap SPBE ini akan dapat menjadikan salah satu penopang dari slogan "Semarang Rumah Kita". Melalui SPBE Kota Semarang akan dapat mensinergikan dan mensikronisasikan berbagai program-program TIK Pemkot Kabupaten Malang seperti program: Reformasi Birokrasi, Smart City, Satu Data, Satu Peta, Penanganan Kemiskinan dan Stunting, Inovasi yang berbasis TIK, serta program-program lainnya. Portal SPBE yang dioperasionalkan menjadi perhatian kita semua, karena merupakan pintu masuk dan potret SPBE Kabupaten Malang. Akhir kata saya ucapkan terima kasih kepada semua pihak yang telah membantu terwujudnya portal SPBE ini. Semoga portal ini bisa bermanfaat untuk mendukung publikasi Sistem Pemerintahan Berbasis Elektronik Kota Semarang, yang berguna untuk internal Pemkot Kabupaten Malang dan eksternal para pemangku kepentingan pembangunan di Kota Semarang. Semoga Allah SWT selalu meridhoi niat luhur kita semua, Aamiin. Wassalamualaikum Warahmatullahi Wabarakatuh.
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
