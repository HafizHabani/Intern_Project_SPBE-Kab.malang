// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoBaru } from "../assets";
import axios from 'axios';
import { urlAPI } from '../constants';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  kebijakanDummy,
  manajemenDummy,
  layananDummy,
  kelolaDummy,
  newsDummy,
  galleryPhoto,
  galleryVideo,
  layanansDummy,
  indikatorDummy,
} from "../constants";
import {
  TabelGaleri,
  TabelBerita,
  TabelDomain,
  NilaiIndikator,
  TabelLayanan,
  TabelGaleriVideo,
} from "../components";


const Admin = () => {
  const [openDomain, setOpenDomain] = useState(false);
  const [openGaleri, setOpenGaleri] = useState(false);
  const [component, setComponent] = useState(0);
  const [theToken, setTheToken] = useState(getToken());

  const handleOpenDomain = () => {
    setOpenDomain(!openDomain);
    setOpenGaleri(false); // Tutup dropdown galeri jika terbuka
  };

  const handleOpenGaleri = () => {
    setOpenGaleri(!openGaleri);
    setOpenDomain(false); // Tutup dropdown domain jika terbuka
  };

  if (!theToken) {
    return <Navigate to="/Login" />;
  }

  function getToken() {
    const tokenString = localStorage.getItem("token"); // Mengambil token dari localStorage
    return tokenString;
  }
  function removeToken() {
    localStorage.removeItem("token"); // Menghapus token dari localStorage
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState({});

  const fetchData = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${theToken}`
    await axios.get(`${urlAPI}user`)
    .then((response) => {
        setUser(response.data);
    })
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if(!theToken) {
        return <Navigate to="/Login" />;
    }
    fetchData();
  }, []);


  

  return (
    <div>
      <div className="px-10 shadow-lg">
        <nav className="w-full flex py-3 justify-between items-center navbar ">
          <Link to="/">
            <img
              src={logoBaru}
              alt="logospbe"
              className=" max-h-14 sm:w-auto hover:cursor-pointer"
            />
          </Link>
        </nav>
      </div>
   
         
      <div className="card-body bg-blue-50 rounded-md p-6">
        <Typography className="text-2xl font-bold text-gray-800 mb-2">
          Selamat Datang, <span className="text-indigo-600">{user.name}</span>
        </Typography>
        <hr className="border-gray-300 mb-4" />
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Typography className="text-gray-600">Role: Administrator</Typography>
            <Typography className="text-gray-600">Terakhir Masuk: {new Date().toLocaleString()}</Typography>
          </div>
        </div>
      </div>
          
       
      <div className="flex flex-row">
        <div className="bg-gradient-to-b from-red-600 from-10% to-white to-80% shadow-xl">
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 bg-transparent shadow-none">
            <List className="flex justify-center">
              <Accordion
                open={openDomain}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      openDomain ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={openDomain}>
                  <AccordionHeader
                    onClick={handleOpenDomain}
                    className="border-b-0 px-10 py-0 pt-4 font-bold"
                  >
                    <Typography color="blue-gray" className="font-bold">
                      Domain
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-0 ml-8">
                  <List className="p-0">
                    <ListItem onClick={() => setComponent(0)}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Kebijakan
                    </ListItem>
                    <ListItem onClick={() => setComponent(1)}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Manajemen
                    </ListItem>

                    <ListItem onClick={() => setComponent(2)}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Layanan
                    </ListItem>
                    <ListItem onClick={() => setComponent(3)}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Tata Kelola
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <ListItem
                className="px-10 pt-4 font-bold"
                onClick={() => setComponent(4)}
              >
                Indeks SPBE
              </ListItem>
              <ListItem
                className="px-10 pt-4 font-bold"
                onClick={() => setComponent(5)}
              >
                Portal Layanan
              </ListItem>
              <ListItem
                className="px-10 pt-4 font-bold"
                onClick={() => setComponent(6)}
              >
                Berita
              </ListItem>

              <Accordion
                open={openGaleri}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      openGaleri ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={openGaleri}>
                  <AccordionHeader
                    onClick={handleOpenGaleri}
                    className="border-b-0 px-10 py-0 pt-4 font-bold"
                  >
                    <Typography color="blue-gray" className="font-bold">
                      Galeri
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-0 ml-8">
                  <List className="p-0">
                    <ListItem onClick={() => setComponent(7)}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Foto
                    </ListItem>
                    <ListItem onClick={() => setComponent(8)}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Video
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <Link to="/">
                <ListItem
                  className="px-4 ml-2 mt-4 font-bold"
                  onClick={() => {
                    setTheToken(""), removeToken();
                  }}
                >
                  <div className=" text-white py-1 bg-rose-800 px-3 rounded-md">
                    Log Out
                  </div>
                </ListItem>
              </Link>
            </List>
          </Card>
        </div>
        <div className="">
          {component == 0 && (
            <TabelDomain
              domain={kebijakanDummy.data}
              nama="Kebijakan"
              keterangan="Kebijakan"
            />
          )}
          {component == 1 && (
            <TabelDomain
              domain={manajemenDummy.data}
              nama="Manajemen"
              keterangan="Manajemen"
            />
          )}
          {component == 2 && (
            <TabelDomain
              domain={layanansDummy.data}
              nama="Layanan"
              keterangan="Layanans"
            />
          )}
          {component == 3 && (
            <TabelDomain
              domain={kelolaDummy.data}
              nama="Tata Kelola"
              keterangan="Kelola"
            />
          )}
          {component == 4 && (
            <NilaiIndikator
              nilai={indikatorDummy.data}
              nama="Nilai SPBE"
              keterangan="Nilai SPBE"
            />
          )}
          {component == 5 && (
            <TabelLayanan
              layanan={layananDummy.data}
              nama="Layanan"
              keterangan="Layanan"
            />
          )}
          {component == 6 && (
            <TabelBerita
              berita={newsDummy.data}
              nama="Berita"
              keterangan="Berita"
            />
          )}
          {component == 7 && (
            <TabelGaleri
              galeri={galleryPhoto.data}
              nama="Galeri Foto"
              keterangan="Galeri"
            />
          )}
          {component == 8 && (
            <TabelGaleriVideo
              galeriVideo={galleryVideo.data}
              nama="Galeri Video"
              keterangan="Galeri"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
