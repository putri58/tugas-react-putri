import React, { useState } from 'react';

export default function Appointments() {
  const [darkMode, setDarkMode] = useState(false);

  const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

  // Data janji temu pasien dokter hewan
  const calendarDays = [
    { date: 27, type: 'prev' }, { date: 28, type: 'prev' }, { date: 29, type: 'prev' }, { date: 30, type: 'prev' },
    { date: 1, type: 'curr', events: [{ title: 'BELLA (VACCINE)', time: '9:00', color: 'bg-yellow-400' }] },
    { date: 2, type: 'curr' }, { date: 3, type: 'curr' },
    { date: 4, type: 'curr', events: [{ title: 'MILO (SURGERY)', time: '12:30', color: 'bg-blue-800' }] },
    { date: 5, type: 'curr' },
    { date: 6, type: 'curr', events: [{ title: 'COCO (CHECKUP)', time: '11:00', color: 'bg-rose-500' }] },
    { date: 7, type: 'curr' }, { date: 8, type: 'curr' },
    { date: 9, type: 'curr', events: [{ title: 'LUNA (PILLS)', time: '2:00', color: 'bg-indigo-500' }] },
    { date: 10, type: 'curr' },
    { date: 11, type: 'curr' }, { date: 12, type: 'curr' }, { date: 13, type: 'curr' }, { date: 14, type: 'curr' }, { date: 15, type: 'curr' }, { date: 16, type: 'curr' }, { date: 17, type: 'curr' },
    { date: 18, type: 'curr' }, { date: 19, type: 'curr' }, { date: 20, type: 'curr' }, { date: 21, type: 'curr' }, { date: 22, type: 'curr' }, { date: 23, type: 'curr' }, { date: 24, type: 'curr' },
  ];

  return (
    <div className={`${darkMode ? 'bg-[#1a1a1a] text-white' : 'bg-gray-50 text-gray-800'} min-h-screen p-8 transition-colors duration-300`}>
      
      {/* Top Header - Tanpa Profile */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-rose-500 tracking-tight">Appointments</h1>
        
        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-3">
          <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500 italic'}`}>
            Apply Dark Theme
          </span>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 rounded-full relative transition-colors ${darkMode ? 'bg-rose-500' : 'bg-gray-300'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${darkMode ? 'right-1' : 'left-1'}`} />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <select className={`text-sm border rounded-lg px-4 py-2 outline-none cursor-pointer ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <option>This month: October</option>
        </select>

        <h2 className="text-sm font-black tracking-[0.3em]">OCTOBER</h2>

        <div className="flex items-center gap-2">
          <button className={`w-9 h-9 flex items-center justify-center border rounded-lg font-bold hover:bg-rose-50 transition-colors ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200'}`}>+</button>
          <div className={`flex border rounded-lg overflow-hidden text-[10px] font-bold ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <button className="px-4 py-2 border-r border-inherit hover:bg-gray-100 transition-colors">DAY</button>
            <button className="px-4 py-2 border-r border-inherit hover:bg-gray-100 transition-colors">WEEK</button>
            <button className="px-4 py-2 bg-rose-500 text-white">MONTH</button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className={`border rounded-2xl overflow-hidden shadow-sm ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        {/* Days Header */}
        <div className={`grid grid-cols-7 border-b ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
          {days.map(day => (
            <div key={day} className="py-4 text-center text-[10px] font-bold text-gray-400 tracking-widest border-r last:border-0 border-inherit">
              {day}
            </div>
          ))}
        </div>

        {/* Grid Cells */}
        <div className={`grid grid-cols-7 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          {calendarDays.map((item, idx) => (
            <div key={idx} className={`min-h-[140px] p-2 border-r border-b relative transition-colors ${darkMode ? 'bg-[#242424] border-gray-800' : 'bg-white border-gray-100'}`}>
              <span className={`absolute top-3 right-4 text-sm font-bold ${item.type === 'prev' ? 'text-gray-300' : (darkMode ? 'text-gray-500' : 'text-gray-400')}`}>
                {item.date}
              </span>

              {/* Event Labels */}
              <div className="mt-8 space-y-1">
                {item.events?.map((ev, i) => (
                  <div key={i} className={`${ev.color} text-white px-2 py-1.5 rounded text-[9px] font-black flex justify-between shadow-sm cursor-pointer hover:brightness-110 transition-all`}>
                    <span>{ev.title}</span>
                    <span className="opacity-70">{ev.time}</span>
                  </div>
                ))}
                
                {/* Visual Spanning Event (Seperti di image_931f1f.png) */}
                {item.date === 12 && (
                  <div className="absolute top-20 left-0 right-[-205%] z-10 h-7 bg-blue-500 text-white text-[9px] font-black flex items-center px-4 rounded-full mx-2 shadow-lg cursor-pointer">
                    CHECKUP: OLA BOLUWATIFE (PATIENT) <span className="ml-auto opacity-70">9:30</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}