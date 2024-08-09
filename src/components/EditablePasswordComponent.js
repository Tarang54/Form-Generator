import React, { useState } from 'react';
import FormPopup from './FormPopup';

const EditablePasswordComponent = ({ addComponent }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSavePopup = (config) => {
    addComponent({ ...config, type: 'Password' });
  };

  return (
    <div>
      <button className='font-semibold border-2 w-[300px] border-[#363062] p-[10px] text-[#363062] hover:text-[#E9D5CA] hover:bg-[#827397] rounded-lg m-auto ' onClick={handleAddClick}>Add Password</button>
      {showPopup && (
        <FormPopup
          onClose={handleClosePopup}
          onSave={handleSavePopup}
          componentType="Password"
        />
      )}
    </div>
  );
};

export default EditablePasswordComponent;
