import React from 'react';

const RightPanel = ({ addedComponents }) => {
  return (
    <div className="right-panel w-full">
      {addedComponents.map((component, index) => (
        <div key={index} className="form-element my-[15px] pl-[10px]">
          {renderComponent(component)}
        </div>
      ))}
    </div>
  );
};

const renderComponent = (component) => {
  switch (component.type) {
    case "Text":
      return (
        <div className='flex gap-[15px] items-center'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          <input className='py-[10px] px-[10px] rounded-[10px] text-[16px]' type="text" readOnly />
        </div>
      );
    case "Button":
      return (
        <div>
          <button className='rounded-[28px] bg-[#878787] text-[#fff] text-[16px] py-[10px] px-[30px] hover:bg-[#0a0a0a]'>{component.title}</button>
        </div>
      );
    case "Submit":
      return (
        <div>
          <input className='rounded-[28px] bg-[#878787] text-[#fff] text-[16px] py-[10px] px-[30px] hover:bg-[#0a0a0a] cursor-pointer' type="submit" value={component.title} readOnly />
        </div>
      );
    case "Date":
      return (
        <div className='flex gap-[15px] items-center'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          <input className='py-[10px] px-[10px] rounded-[10px] text-[16px]' type="date" readOnly />
        </div>
      );
    case "Email":
      return (
        <div className='flex gap-[15px] items-center'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          <input className='py-[10px] px-[10px] rounded-[10px] text-[16px]' type="email" readOnly />
        </div>
      );
    case "Number":
      return (
        <div className='flex gap-[15px] items-center'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          <input className='py-[10px] px-[10px] rounded-[10px] text-[16px]' type="number" readOnly />
        </div>
      );
    case "Password":
      return (
        <div className='flex gap-[15px] items-center'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          <input className='py-[10px] px-[10px] rounded-[10px] text-[16px]' type="password" readOnly />
        </div>
      );
    case "Radio":
      return (
        <div className='flex flex-col gap-[15px]'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          {component.options.map((option, index) => (
            <div key={index}>
              <input  type="radio" name={component.title} value={option} readOnly />
              <label className='text-[#fff] text-[18px] px-3'>{option}</label>
            </div>
          ))}
        </div>
      );
    case "TextArea":
      return (
        <div className='flex gap-[15px] items-center'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          <textarea className='py-[10px] px-[10px] rounded-[10px] text-[16px]' readOnly></textarea>
        </div>
      );
    case "Dropdown":
      return (
        <div className='flex gap-[15px] items-center'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          <select className='py-[10px] px-[10px] rounded-[10px] text-[16px]' readOnly>
            {component.options.map((option, index) => (
              <option  key={index}>{option}</option>
            ))}
          </select>
        </div>
      );
    case "Checkbox":
      return (
        <div className='flex flex-col gap-[15px]'>
          <label className='text-[#fff] text-[18px]'>{component.title}</label>
          {component.options.map((option, index) => (
            <div key={index}>
              <input type="checkbox" name={component.title} value={option} readOnly />
              <label className='text-[#fff] text-[18px] pl-3'>{option}</label>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
};

export default RightPanel;
