import React from 'react'
import { logokab } from '../assets'
import {
    Card,
    List,
    ListItem,
  } from "@material-tailwind/react";

const Admin = () => {
  return (
    <div>
      <div className='px-10 shadow-lg'>
        <nav className="w-full flex py-3 justify-between items-center navbar ">
            <img src={logokab} alt="logospbe" className="w-24 sm:w-auto" /> {/* Adjusted logo size */}
        </nav>
      </div>
      <div className='flex flex-row'>
        <div>
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <List className='flex justify-center'>
                <ListItem className='px-10 pt-5 font-bold'>
                Dashboard
                </ListItem >
                <ListItem className='px-10 pt-5 font-bold'>
                E-Commerce
                </ListItem>
                <ListItem className='px-10 pt-5 font-bold'>
                Inbox
                </ListItem>
                <ListItem className='px-10 pt-5 font-bold'>
                Profile
                </ListItem>
                <ListItem className='px-10 pt-5 font-bold'>
                Settings
                </ListItem>
                <ListItem className='px-10 pt-5 font-bold'>
                Log Out
                </ListItem>
            </List>
            </Card>
        </div>
        <div className=''>
            
        </div>
      </div>
    </div>
  )
}

export default Admin
