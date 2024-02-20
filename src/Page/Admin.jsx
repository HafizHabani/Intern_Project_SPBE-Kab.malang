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
import { KebijakanDummy } from '../constants';
import TabelDomain from '../components/TabelDomain';

const Admin = () => {
  const [open, setOpen] = React.useState(0);
 
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
        <div className='bg-gradient-to-br from-emerald-500 from-5% to-white to-95%'>
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
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
                    <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 px-10 py-0 pt-4  font-bold">
                    <Typography color="blue-gray" className="">
                        Domain
                    </Typography>
                    </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-0 ml-8">
                    <List className="p-0">
                    <ListItem>
                        <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Kebijakan
                    </ListItem>
                    <ListItem>
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
                    <ListItem>
                        <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                        </ListItemPrefix>
                        Tata Kelola
                    </ListItem>
                    </List>
                </AccordionBody>
                </Accordion>
                <ListItem className='px-10 pt-4 font-bold'>
                Berita
                </ListItem>
                <ListItem className='px-10 pt-4 font-bold'>
                Galeri 
                </ListItem>
                <ListItem className='px-10 pt-4 font-bold text-red-600'>
                Log Out
                </ListItem>
            </List>
            </Card>
        </div>
        <div className=''>
          <TabelDomain domain = {KebijakanDummy} keterangan = "Kebijakan"/>
        </div>
      </div>
    </div>
  )
}

export default Admin
