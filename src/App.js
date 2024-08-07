import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css' 
import EditableButtonComponent from './components/EditableButtonComponent';
import EditableSubmitComponent from './components/EditableSubmitComponent';
import EditableDateComponent from './components/EditableDateComponent';
import EditableEmailComponent from './components/EditableEmailComponent';
import EditableNumberComponent from './components/EditableNumberComponent';
import EditablePasswordComponent from './components/EditablePasswordComponent';
import EditableRadioComponent from './components/EditableRadioComponent';
import EditableTextComponent from './components/EditableTextComponent';
import EditableTextAreaComponent from './components/EditableTextAreaComponent';
import EditableDropdownComponent from './components/EditableDropdownComponent';
import EditableCheckboxComponent from './components/EditableCheckboxComponent';
import RightPanel from './components/RightPanel';
import CodePage from './components/CodePage';

const App = () => {
  const [addedComponents, setAddedComponents] = useState([]);
  const navigate = useNavigate();

  const addComponent = (component) => {
    setAddedComponents([...addedComponents, component]);
  };

  const generateCode = () => {
    const formCode = addedComponents.map((component, index) => {
      switch (component.type) {
        case "Text":
          return `<div key=${index}>
            <label>${component.title}</label>
            <input type="text" />
          </div>`;
        case "Button":
          return `<div key=${index}>
            <button>${component.title}</button>
          </div>`;
        case "Submit":
          return `<div key=${index}>
            <input type="submit" value="${component.title}" />
          </div>`;
        case "Date":
          return `<div key=${index}>
            <label>${component.title}</label>
            <input type="date" />
          </div>`;
        case "Email":
          return `<div key=${index}>
            <label>${component.title}</label>
            <input type="email" />
          </div>`;
        case "Number":
          return `<div key=${index}>
            <label>${component.title}</label>
            <input type="number" />
          </div>`;
        case "Password":
          return `<div key=${index}>
            <label>${component.title}</label>
            <input type="password" />
          </div>`;
        case "Radio":
          return `<div key=${index}>
            <label>${component.title}</label>
            ${component.options.map((option, idx) => `<input key=${idx} type="radio" name="${component.title}" value="${option}" />${option}`).join('')}
          </div>`;
        case "TextArea":
          return `<div key=${index}>
            <label>${component.title}</label>
            <textarea></textarea>
          </div>`;
        case "Dropdown":
          return `<div key=${index}>
            <label>${component.title}</label>
            <select>
              ${component.options.map((option, idx) => `<option key=${idx}>${option}</option>`).join('')}
            </select>
          </div>`;
        case "Checkbox":
          return `<div key=${index}>
            <label>${component.title}</label>
            ${component.options.map((option, idx) => `<input key=${idx} type="checkbox" name="${component.title}" value="${option}" />${option}`).join('')}
          </div>`;
        default:
          return '';
      }
    }).join('\n');

    navigate('/code', { state: { formCode } });

    console.log(formCode);
  };

  return (
    <div className="container bg-[#212121] h-full flex flex-col justify-around items-center p-[20px] m-auto">
      <div className='header text-center flex flex-col gap-[10px] w-full pb-[20px]'>
        <h1 className='text-4xl text-[#fff]'>Form Generator</h1>
        <h4 className='text-lg text-[#fff]'>Have the form you like</h4>
      </div>
      <div className='flex w-full'>
        <Routes>
          <Route path="/" element={
            <>
              <div className="left-panel w-1/2 flex flex-col gap-[10px] ">
                <EditableTextComponent addComponent={addComponent} />
                <EditableButtonComponent addComponent={addComponent} />
                <EditableSubmitComponent addComponent={addComponent} />
                <EditableDateComponent addComponent={addComponent} />
                <EditableEmailComponent addComponent={addComponent} />
                <EditableNumberComponent addComponent={addComponent} />
                <EditablePasswordComponent addComponent={addComponent} />
                <EditableRadioComponent addComponent={addComponent} />
                <EditableTextAreaComponent addComponent={addComponent} />
                <EditableDropdownComponent addComponent={addComponent} />
                <EditableCheckboxComponent addComponent={addComponent} />
              </div>
              <div className='w-1/2 flex flex-col'>
                <RightPanel addedComponents={addedComponents} />
                <button className='text-[#fff] border-2 p-[5px] rounded-lg m-auto' onClick={generateCode}>Generate Code</button>
              </div>
            </>
          }/> 
        </Routes>
      <Routes>
        <Route path="/code" element={<CodePage />} /> 
      </Routes>
      </div>
    </div>
  );
};

export default App;
