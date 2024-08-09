// import React, { useState } from 'react';
// import FormPopup from './FormPopup';

// const EditableTextComponent = ({ addComponent }) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleAdd = (component) => {
//     addComponent(component);
//   };

//   return (
//     <>
//     <div className="component-wrapper flex items-center">
//       <div className="relative w-full">
//         <input
//           className='py-[12px] px-[20px]  rounded-[25px] text-[#363062] text-[16px] w-full pr-[80px] border-2 focus:border-[#0a0a0a] outline-none'
//           type="text"
//           value="Text"
//           readOnly
//           // onChange={(e) => setTitle(e.target.value)}
//           // onFocus={(e) => e.target.select()}
//         />
//         <button 
//           className='absolute right-[10px] top-[50%] transform -translate-y-[50%] rounded-[25px] bg-[#363062] text-[#fff] text-[16px] py-[6px] px-[13px] hover:bg-[#0a0a0a]'
//           onClick={()=>setShowPopup(true)}
//         >t
//           +
//         </button>
//       </div>
//     </div>
//     {showPopup && (
//       <FormPopup
//         component={{ type: "Text" }}
//         onSave={(comp) => {
//           handleAdd(comp);
//           setShowPopup(false);
//         }}
//         onClose={() => setShowPopup(false)}
//       />
//     )}
//     </>
//   );
// };

// export default EditableTextComponent;


import React, { useState } from 'react';
import FormPopup from './FormPopup';

const EditableTextComponent = ({ addComponent }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSavePopup = (config) => {
    addComponent({ ...config, type: 'Text' });
  };

  return (
    <div>
      <button className='font-semibold border-2 w-[300px] border-[#363062] p-[10px] text-[#363062] hover:text-[#E9D5CA] hover:bg-[#827397] rounded-lg m-auto ' onClick={handleAddClick}>Add Text</button>
      {showPopup && (
        <FormPopup
          onClose={handleClosePopup}
          onSave={handleSavePopup}
          componentType="Text"
        />
      )}
    </div>
  );
};

export default EditableTextComponent;
