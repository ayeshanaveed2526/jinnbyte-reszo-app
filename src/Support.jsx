import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Support({ heading }) {
  const [phone, setPhone] = useState('');
  return (
    <div className="w-full mx-auto max-w-4xl">
      <div className='bg-[#131E2E] w-full min-w-full p-5 rounded-md'>
        <div className='text-white text-2xl font-semibold mb-4'>
          <h2>{heading}</h2>
        </div>
        <div className='flex flex-row gap-3'>
          <div className="flex flex-col w-full">
            <label
              className="text-white font-normal font-onset text-sm mb-1"
              htmlFor="email"
            >
              Email
              <span className="text-[#FF5655] size-1 font-bold">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder='Email Address'
              className='bg-[#1B2D47] text-white text-sm font-onset px-4 py-3 rounded-md w-full mb-2'
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className="text-white font-normal font-onset text-sm mb-1"
              htmlFor="phone"
            >
              Phone Number
              <span className="text-[#FF5655] size-1 font-bold">*</span>
            </label>
            <PhoneInput
              country={'pk'}
              value={phone}
              onChange={setPhone}
              inputProps={{
                id: "phone",
                placeholder: "000 0000 0000"
              }}
              inputStyle={{
                backgroundColor: '#1B2D47',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                height: '44px',
                fontSize: '14px',
                width: '100%',
              }}
              buttonStyle={{
                backgroundColor: '#1B2D47',
                border: 'none',
              }}
              dropdownStyle={{
                backgroundColor: '#1B2D47',
                color: 'white',
              }}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-6 justify-end">
          <button
            className="w-[160px] h-[38px] bg-[#131E2E] text-white border border-white rounded"
            type="button"
          >
            Cancel
          </button>
          <button
            className="w-[160px] h-[38px] bg-[#B04759] text-white rounded"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}