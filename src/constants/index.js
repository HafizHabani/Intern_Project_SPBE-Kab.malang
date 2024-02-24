import { facebook, instagram, linkedin, twitter, } from "../assets";
import axios from "axios"
const baseUrl = 'http://localhost:8000/api/';

export const navLinks = [
  {
    id: "#Dashboard",
    title: "Beranda",
  },
  {
    id: "#Tentang",
    title: "Tentang",
  },
  {
    id: "#Domain",
    title: "Domain",
  },
  {
    id: "#Berita",
    title: "Berita",
  },
  {
    id: "#Galeri",
    title: "Galeri"
  },
  {
    id: "Login",
    title: "Admin"
  }
];

export const navAdm = [
  {
    id:"Profile",
    title :"Profile"
  }
]

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

// Berita
export const newsDummy = await axios.get(baseUrl+'abcd/show');
// Galeri Foto
export const galleryPhoto = await axios.get(baseUrl+'zxcv/show');

// Manajemen Portal
export const kebijakanDummy = await axios.get(baseUrl+'kebijakan/show');
export const manajemenDummy = await axios.get(baseUrl+'manajemen/show');
export const kelolaDummy = await axios.get(baseUrl+'kelola/show');


export const galeriDummy = [
  {
    nomor: 1,
    namaFoto: "Sunset at Beach",
    tanggal: "2024-02-21",
    waktu: "18:00",
    imageURL: "https://img.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg?w=1480&t=st=1708451651~exp=1708452251~hmac=609c6c7aa8a88b205ea78d36c5158bbe205df8492997e17a18b81e30ab1eca63",
    penjelasan: "Data dummy masih perlu dihubungkan dengan database untuk menampilkan data real dan akurat",
    linkDoc: ""
  },
  {
    nomor: 2,
    namaFoto: "Mountain Landscape",
    tanggal: "2024-02-20",
    waktu: "10:30",
    imageURL: "https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=1380&t=st=1708451687~exp=1708452287~hmac=7032d5fea9aaa06650d5ffe51c4f26bd6041af368480dc2666028b781b02f0ff",
    penjelasan: "Data dummy masih perlu dihubungkan dengan database untuk menampilkan data real dan akurat",
    linkDoc: ""
  },
  {
    nomor: 3,
    namaFoto: "City Skyline",
    tanggal: "2024-02-19",
    waktu: "21:45",
    imageURL: "https://img.freepik.com/free-photo/beautiful-office-building-tower-architecture-bangkok-city_1203-9953.jpg?w=1380&t=st=1708451725~exp=1708452325~hmac=ec5b0de6a425f5fdb9dc165abe1361eb3c0e6dfcc40f5ada42fcb509065329f8",
    penjelasan: "Data dummy masih perlu dihubungkan dengan database untuk menampilkan data real dan akurat",
    linkDoc: ""
  },
  // Add more photos as needed
];