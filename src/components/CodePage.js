import React from 'react';
import { useLocation } from 'react-router-dom'; 

const CodePage = () => {
  const location = useLocation();
  const { formCode } = location.state || {}; 

  return (
    <div className="code-page w-full text-center flex flex-col gap-[20px] pt-[20px]">
      <h1 className='text-2xl font-me text-[#363062]'>Generated Code</h1>
      <textarea
        className=' mx-[30px] rounded-xl py-[10px] px-[20px]'
        rows="20"
        cols="80"
        value={formCode || ''}
        readOnly
      />
    </div>
  );
};

export default CodePage;
