import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; 
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
import EditableFormHeadingComponent from './components/EditableFormHeadingComponent'; 
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
                return `<div class="simple-container" key="${index}">
                    <label class="custom-label">${component.title}</label>
                    <input id="${component.title}" name="${component.title.toLowerCase().replace(/\s+/g, '')}" class="custom-input" type="text" placeholder="${component.placeholder || ''}" ${component.required ? 'required' : ''} />
                </div>`;
            case "Button":
                return `<div class="button-container" key="${index}">
                    <button id="${component.title}" class="custom-button"  ${component.required ? 'required' : ''} >${component.title}</button>
                </div>`;
            case "Submit":
                return `<div class="button-container" key="${index}">
                    <input id="${component.title}" class="custom-submit" type="submit"  ${component.required ? 'required' : ''}  value="${component.title}" />
                </div>`;
            case "Date":
                return `<div class="simple-container" key="${index}">
                    <label class="custom-label">${component.title}</label>
                    <input id="${component.title}" name="${component.title.toLowerCase().replace(/\s+/g, '')}" class="custom-input" type="date" placeholder="${component.placeholder || ''}" ${component.required ? 'required' : ''} />
                </div>`;
            case "Email":
                return `<div class="simple-container" key="${index}">
                    <label class="custom-label">${component.title}</label>
                    <input id="${component.title}" name="${component.title.toLowerCase().replace(/\s+/g, '')}" class="custom-input" type="email" placeholder="${component.placeholder || ''}" ${component.required ? 'required' : ''} />
                </div>`;
            case "Number":
                return `<div class="simple-container" key="${index}">
                    <label class="custom-label">${component.title}</label>
                    <input id="${component.title}" name="${component.title.toLowerCase().replace(/\s+/g, '')}" class="custom-input" type="number" placeholder="${component.placeholder || ''}" ${component.required ? 'required' : ''} />
                </div>`;
            case "Password":
                return `<div class="simple-container" key="${index}">
                    <label class="custom-label">${component.title}</label>
                    <input id="${component.title}" name="${component.title.toLowerCase().replace(/\s+/g, '')}" class="custom-input" type="password" placeholder="${component.placeholder || ''}" ${component.required ? 'required' : ''} />
                </div>`;
            case "Radio":
                return `<div class="simple-container" key="${index}">
                    <label class="custom-label">${component.title}</label>
                    ${component.options.map((option, idx) => `<div class="radio-container">
                        <input id="${component.title}-${idx}" name="${component.title.toLowerCase().replace(/\s+/g, '')}" key="${idx}" type="radio" name="${component.title}" value="${option}" class="custom-radio" ${component.required ? 'required' : ''} />
                        <label class="radio-label">${option}</label>
                    </div>`).join('')}
                </div>`;
            case "TextArea":
                return `<div class="simple-container" key="${index}">
                    <label class="custom-label">${component.title}</label>
                    <textarea id="${component.title}" name="${component.title.toLowerCase().replace(/\s+/g, '')}" class="custom-input height-120" placeholder="${component.placeholder || ''}" ${component.required ? 'required' : ''}></textarea>
                </div>`;
              case "Dropdown":
                  return `<div class="simple-container full-width" key="${index}">
                      <label class="custom-label">${component.title}</label>
                      <div class="relative">
                        <select 
                          id="dropdown-${component.title}"
                          onchange="handleChange(event)" 
                          defaultValue=""
                          ${component.required ? 'required' : ''}
                        >
                          <option value="" disabled hidden>${component.placeholder || ''}</option>
                          ${component.options.map((option, idx) => `<option key="${idx}" name="${component.title.toLowerCase().replace(/\s+/g, '')}" value="${option}">${option}</option>`).join('')}
                        </select>
                        <svg class="dropdown-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.70711 0.292893C10.0676 0.653377 10.0953 1.22061 9.7903 1.6129L9.70711 1.70711L5.70711 5.70711C5.34662 6.06759 4.77939 6.09532 4.3871 5.7903L4.29289 5.70711L0.292893 1.70711C-0.0976305 1.31658 -0.0976305 0.683418 0.292893 0.292893C0.653378 -0.0675907 1.22061 -0.0953203 1.6129 0.209705L1.70711 0.292893L5 3.585L8.29289 0.292893C8.65338 -0.0675907 9.22061 -0.0953203 9.6129 0.209705L9.70711 0.292893Z" fill="#7D8592"/>
                        </svg>
                      </div>
                  </div>`;
              case "Checkbox":
                  return `<div class="simple-container" key="${index}">
                    <label class="custom-label">${component.title}</label>
                    ${component.options.map((option, idx) => `<div class="checkbox-container" key="${idx}">
                      <input 
                          type="checkbox" 
                          id="checkbox-${component.title}-${idx}" 
                          name="${component.title.toLowerCase().replace(/\s+/g, '')}" 
                          value="${option}" 
                          ${component.required ? 'required' : ''} 
                          class="hide" 
                      />
                      <label for="checkbox-${component.title}-${idx}" class="checkbox-label">
                          <svg class="unchecked-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" fill="white"/>
                              <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#D8E0F0"/>
                          </svg>
                          <svg class="checked-svg hide" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" fill="#00ADE7"/>
                              <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#00ADE7"/>
                              <path d="M11.6666 7L7.99992 10.6667L6.33325 9" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <span class="checkbox-span">${option}</span>
                      </label>
                    </div>`).join('')}
                  </div>`;
            case 'FormHeading':
                return `<div key="${index}">
                    <h2 id="${component.title}" class="form-heading">${component.title}</h2>
                </div>`;
            default:
                return '';
        }
    }).join('\n');

    const completeCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Form</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: "Inter", sans-serif;
                background-color: #E9D5CA;
                color: #363062;
                margin: 0;
                width: 100%;
                padding: 20px;
            }
            .relative {
                position: relative;
            }
            .dropdown-icon {
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
            .simple-container {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 12px;
                margin-bottom: 12px;
            }
            .height-120 {
                height: 120px;
            }
            .custom-label {
                color: #0A1629;
                font-weight: 600;
                font-size: 14px;
                line-height: 21px;
            }
            .container {
              margin: auto;
              background-color: white;
              padding: 40px;
              border-radius: 16px;
              width: 100%;
            }
            .hide{
              display: none;
            }
            .checkbox-label {
              display: flex;
              align-items: center;
              padding: 4px;
              cursor: pointer;
            }
            .container h2 {
                text-align: center;
                font-weight: 600;
                font-size: 24px;
                line-height: 36px;
                margin-bottom: 16px;
            }
            .custom-radio {
                appearance: none;
                -webkit-appearance: none;
                width: 16px;
                height: 16px;
                border: 1px solid #D8E0F0;
                border-radius: 50%;
                padding: 4px;
                background-color: #FFFFFF;
                cursor: pointer;
                position: relative;
            }
            .custom-radio:checked {
                border: 1px solid #00ADE7;
            }
            .custom-radio:checked::before {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                background-color: #00ADE7;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .radio-label {
                color: #0A1629;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                transition: all 0.3s;
                margin-left: 8px;
            }
            .custom-radio:checked + .radio-label {
                font-weight: 600;
            }
            .radio-container {
                display: flex;
                align-items: center;
                padding-left: 5px;
            }
            .checkbox-container {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .checkbox-label {
                color: #0A1629;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                margin-left: 8px;
            }
            .checkbox-span{
              color: #0A1629; 
              font-weight: 400;
              font-size: 14px;
              line-height: 21px; 
              margin-left: 8px;
            }
            select {
                width: 100%;
                height: 48px;
                display: flex;
                border: 1px solid #D8E0F0;
                justify-content: space-between;
                padding: 12px;
                padding-left: 16px;
                padding-right: 30px;
                border-radius: 16px;
                background-color: white;
                appearance: none;
                color: #7D8592;
                font-weight: normal;
            }
            select:focus {
              border-color: #00ADE7;
              font-weight: bold;
            }
            .full-width{
              width: 100%;
            }
            select option:checked {
                color: #000000;
                font-weight: 900;
            }
            input[type="checkbox"]:checked + label .unchecked-svg {
                display: none;
            }
            input[type="checkbox"]:checked + label .checked-svg {
                display: block;
            }
            .unchecked-svg, .checked-svg {
                width: 18px;
                height: 18px;
            }
            .checked-svg {
                display: none;
            }
            .custom-input {
              width: 100%;
              color: #0A1629;
              font-weight: 600;
              font-size: 14px;
              line-height: 21px;
              padding: 12px;
              padding-left: 16px;
              border-radius: 16px;
              border: 1px solid #D8E0F0;
            }
            .custom-input::placeholder {
              color: #7D8592;
              font-weight: 400;
            }
            .custom-input:focus {
                border-color: #00ADE7;
            }
            input[type="submit"] {
              background-color: #00ADE7;
              color: white;
              border: none;
              padding: 12px 20px;
              cursor: pointer;
              border-radius: 16px;
              margin: 12px auto;
              width: 100%;
            }
            .custom-button {
              margin-left: 0px;
              border: none;
              display: inline-block;
              vertical-align: middle;
              width: 100%;
              margin-top: 12px;
              margin-bottom: 12px;
              background-color: #00ADE7;
              padding: 12px 20px;
              border-radius: 16px;
              color: white;
              text-align: center;
            }
            .button-container {
              width: 100%;
              display: flex;
              justify-content: center;
              margin: 12px auto;
            }
            .form-heading {
              font-size: 24px;
              font-weight: 600;
              color: #0A1629;
              margin-top: 16px;
              margin-bottom: 24px;
            }
            .thank-you-message {
              text-align: center;
            }
            .thank-you-message h1 {
              font-size: 32px;
              color: #363062;
              margin-bottom: 10px;
            }
            .thank-you-message h3 {
              font-size: 24px;
              color: #7D8592;
            }
        </style>
    </head>
    <body>
        <div id="container" class="container">
            <form id="customForm" action="#">
                ${formCode}
            </form>
        </div>
    </body>
    <script>
        document.getElementById("customForm").addEventListener("submit", async function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            const data = {
                "data": []
            };
            formData.forEach((value, key) => {
                data.data.push({
                    "key": key,
                    "value": value
                });
            });
            try {
                const response = await fetch('https://api.polariscampus.com/polaris/v1/leads/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    document.getElementById("container").innerHTML = "<div class='thank-you-message'><h1>Thank you!!</h1><h3>Form submitted</h3></div>";
                } else {
                    console.error('Submission failed', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    </script>
    </html>`;
  
    navigate('/code', { state: { formCode: completeCode } });
  
    console.log(completeCode);
  };
  

  return (
    <div className="container bg-[#E9D5CA] h-full flex flex-col justify-around items-center p-[20px] m-auto">
      <div className='header text-center flex flex-col gap-[10px] w-full pb-[25px]'>
        <h1 className='text-4xl font-bold text-[#363062]'>Form Generator</h1>
        <h4 className='text-lg text-[#4D4C7D]'>Have the form you like</h4>
      </div>
      <div className='flex w-full'>
        <div className="left-panel max-w-[300px] items-center flex flex-col gap-[10px] ">
          <EditableFormHeadingComponent addComponent={addComponent}/>
          <EditableTextComponent addComponent={addComponent} />
          <EditableButtonComponent addComponent={addComponent} />
          <EditableSubmitComponent addComponent={addComponent} />
          <EditableDateComponent addComponent={addComponent} />
          <EditableEmailComponent addComponent={addComponent} />
          <EditableNumberComponent addComponent={addComponent} />
          <EditablePasswordComponent addComponent={addComponent} />
          <EditableTextAreaComponent addComponent={addComponent} />
          <EditableRadioComponent addComponent={addComponent} />
          <EditableDropdownComponent addComponent={addComponent} />
          <EditableCheckboxComponent addComponent={addComponent} />
        </div>
        <div className='w-full flex flex-col items-center'>
          <Routes>
            <Route path="/" element={
              <div className='w-full flex flex-col gap-4 items-center'>
                <RightPanel addedComponents={addedComponents} setAddedComponents={setAddedComponents} />
                <button className='font-semibold border-2 border-[#363062] p-[10px] text-[#363062] rounded-lg m-auto' onClick={generateCode}>Generate Code</button>
              </div>
            }/> 
          </Routes>
          <Routes>
            <Route path="/code" element={<CodePage />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
