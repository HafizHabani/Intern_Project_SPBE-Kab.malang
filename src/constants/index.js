import { facebook, instagram, linkedin, twitter, } from "../assets";
import axios from "axios"
const baseUrl = 'http://127.0.0.1:8000/api/';


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
export const galleryVideo = await axios.get(baseUrl+'tyuio/show');

// Manajemen Portal Show
export const kebijakanDummy = await axios.get(baseUrl+'kebijakan/show');
export const manajemenDummy = await axios.get(baseUrl+'manajemen/show');
export const kelolaDummy = await axios.get(baseUrl+'kelola/show');
export const layanansDummy = await axios.get(baseUrl+'layanans/show');
export const indikatorDummy = await axios.get(baseUrl+'indikator/show');

//show list aplikasi layanan
export const layananDummy = await axios.get(baseUrl+'layanan/show')

// Manajemen Portal Edit
export const urlAPI = baseUrl;


