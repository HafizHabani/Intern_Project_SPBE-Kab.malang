import React from 'react';
import { imple } from '../assets';

const Imple = () => {
  return (
    <div className='w-full sm:px-4 md:px-8 lg:px-12 py-6'> {/* Adjusted horizontal padding */}
      <div className='flex flex-col md:flex-row gap-4'> {/* Changed flex direction and added items-center */}
        <div className="flex flex-col mb-4 md:mb-0 md:mr-4"> {/* Added margin right on medium screens */}
          <p className="text-primary pl-2 font-bold text-xl md:text-2xl">Implementasi SPBE</p> {/* Adjusted font size */}
          <p className="pl-2 font-bold text-xl md:text-2xl">Kabupaten Malang</p> {/* Adjusted font size */}
        </div>
        <div className='flex justify-center items-center'> {/* Centered image horizontally and vertically */}
          <img src={imple} alt="logospbe" className="w-full sm:max-w-md md:max-w-none" style={{ maxHeight: "800px" }} /> {/* Adjusted max-width and max-height */}
        </div>
      </div>
    </div>
  );
};

export default Imple;
