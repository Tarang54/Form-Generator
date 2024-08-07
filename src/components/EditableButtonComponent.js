import React, { useState } from 'react';

const EditableButtonComponent = ({ addComponent }) => {
  const [title, setTitle] = useState("Button");

  const handleAdd = () => {
    addComponent({ type: "Button", title });
    setTitle("Button");
  };

  return (
    <div className="component-wrapper flex items-center gap-[10px]">
      <input
        className='py-[10px] px-[10px] rounded-[10px] text-[16px]'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onFocus={(e) => e.target.select()}
      />
      <button className='rounded-[28px] bg-[#878787] text-[#fff] text-[16px] py-[10px] px-[20px] hover:bg-[#0a0a0a]' onClick={handleAdd}>Add</button>
    </div>
  );
};

export default EditableButtonComponent;
