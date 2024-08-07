import React, { useState } from 'react';

const EditableRadioComponent = ({ addComponent }) => {
  const [title, setTitle] = useState("Radio");
  const [options, setOptions] = useState(["Option 1"]);

  const handleAddOption = () => {
    setOptions([...options, `Option ${options.length + 1}`]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAdd = () => {
    addComponent({ type: "Radio", title, options });
    setTitle("Radio");
    setOptions(["Option 1"]);
  };

  return (
    <div className="component-wrapper flex items-center flex-wrap gap-[15px]">
      <input
        className='py-[10px] px-[10px] rounded-[10px] text-[16px]'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onFocus={(e) => e.target.select()}
      />
      <div className='flex flex-col gap-[15px]'>
        {options.map((option, index) => (
          <input
            className='py-[10px] px-[10px] rounded-[10px] text-[16px]'
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
      </div>
      <button className='rounded-[28px] bg-[#878787] text-[#fff] text-[16px] py-[10px] px-[20px] hover:bg-[#0a0a0a]' onClick={handleAddOption}>Add Option</button>
      <button className='rounded-[28px] bg-[#878787] text-[#fff] text-[16px] py-[10px] px-[20px] hover:bg-[#0a0a0a]' onClick={handleAdd}>Add</button>
    </div>
  );
};

export default EditableRadioComponent;
