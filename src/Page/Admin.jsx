import React from 'react'
import { logokab } from '../assets'
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
import { kebijakanDummy, manajemenDummy, kelolaDummy, newsDummy, galleryPhoto} from '../constants';
import { TabelGaleri, TabelBerita, TabelDomain } from '../components';

const Admin = () => {
  const [open, setOpen] = React.useState(0);
  const [component, setComponent] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <div className='px-10 shadow-lg'>
        <nav className="w-full flex py-3 justify-between items-center navbar ">
          <img src={logokab} alt="logospbe" className="w-24 sm:w-auto" /> {/* Adjusted logo size */}
        </nav>
      </div>
      <div className='flex flex-row'>
        <div className='bg-gradient-to-b from-red-600 from-10% to-white to-80% shadow-xl'>
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 bg-transparent shadow-none">
            <List className='flex justify-center'>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 px-10 py-0 pt-4 font-bold">
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
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Layanan
                    </ListItem>
                    <ListItem onClick={() => setComponent(2)}>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Tata Kelola
                    </ListItem>
                  </List>
                </AccordionBody>
              </Accordion>
              <ListItem className='px-10 pt-4 font-bold' onClick={() => setComponent(4)}>
                Berita
              </ListItem>
              <ListItem className='px-10 pt-4 font-bold' onClick={() => setComponent(5)}>
                Galeri
              </ListItem>
              <ListItem className='px-10 pt-4 font-bold' onClick={() => setComponent(6)}>
                Indeks SPBE
              </ListItem>
              <ListItem className='px-4 ml-2 mt-4 font-bold'>
                <div className=' text-white py-1 bg-rose-800 px-3 rounded-md'>Log Out</div>
              </ListItem>
            </List>
          </Card>
        </div>
        <div className=''>
          {component == 0 && <TabelDomain domain={kebijakanDummy.data.data} keterangan="Kebijakan" />}
          {component == 1 && <TabelDomain domain={manajemenDummy.data.data} keterangan="Manajemen" />}
          {component == 2 && <TabelDomain domain={kelolaDummy.data.data} keterangan="Tata Kelola" />}
          {component == 4 && <TabelBerita berita={newsDummy.data} keterangan="Berita"/>}
          {component == 5 && <TabelGaleri galeri={galleryPhoto.data} keterangan="Galeri"/>}
          {component == 6 && <TabelGaleri galeri={galleryPhoto.data} keterangan="Nilai Indikator SPBE"/>}
        </div>
      </div>
    </div>
  )
}

export default Admin
