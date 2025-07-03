import React from 'react' 

export default function Navbar() {
  return (
    <div>
            <div className="bg-[#131E2E] border-[1px] border-[#232931] flex flex-row justify-between px-4 py-3">
        <div className="min-w-44">
          <img src="Frame 1618875786.png" alt="Logo Reszo" />
        </div>
        <div className="flex flex-row justify-between items-center gap-6">
          <div>
            <img src="icon.png" alt="bell icon" />
          </div>
          <div>
            <img src="Frame 1618875782.png" alt="pfp pic" />
          </div>
        </div>
      </div>
    </div>
  )
}
