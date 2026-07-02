import React, { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import SectionTitle from "../components/layout/SectionTitle";
import Button from "../components/basic/Button";
import ThemeToggle from "../components/basic/ThemeToggle";
import SelectMonth from "../components/form/SelectMonth";
import CalendarCell from "../components/data-display/CalendarCell";
import EventLabel from "../components/data-display/EventLabel";
import AppointmentSection from "../components/section/AppointmentSection";
import { crmStore } from "../services/CrmStore";

// Warna layanan untuk kalender
const SERVICE_COLOR = {
  "Konsultasi Medis": "bg-indigo-500",
  "Vaksinasi & Steril": "bg-yellow-400",
  "Pet Grooming": "bg-pink-500",
  "Rawat Inap (Hospital)": "bg-blue-700",
};

export default function Appointments() {
  const [darkMode, setDarkMode] = useState(false);

  // ── Booking dari CRM ──────────────────────────────────────
  const [crmBookings, setCrmBookings] = useState([]);

  useEffect(() => {
    const loadBookings = () => {
      setCrmBookings(crmStore.getBookings());
    };
    loadBookings();
    // Refresh tiap kali tab difokus
    window.addEventListener("focus", loadBookings);
    return () => window.removeEventListener("focus", loadBookings);
  }, []);

  // ── Static upcoming & emergency ───────────────────────────
  const [upcomingAppointments] = useState([
    { id: 1, title: "Bella Vaccination", date: "Thursday, October 14", color: "bg-yellow-200" },
    { id: 2, title: "Milo Surgery",      date: "Monday, November 2",   color: "bg-blue-200" },
  ]);

  const [emergencyCases] = useState([
    { id: 1, title: "Rocky Emergency",   room: "Surgery Room 3",     color: "bg-red-200" },
    { id: 2, title: "Luna Observation",  room: "Observation Room",   color: "bg-pink-200" },
  ]);

  const [selectedMonth, setSelectedMonth] = useState("OCTOBER");

  const days = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];

  // ── Kalender dasar (Oktober) ───────────────────────────────
  const baseCalendarDays = [
    { date: 27, type: "prev" },
    { date: 28, type: "prev" },
    { date: 29, type: "prev" },
    { date: 30, type: "prev" },
    { date: 1,  type: "curr", events: [{ title: "BELLA (VACCINE)", time: "9:00",  color: "bg-yellow-400" }] },
    { date: 2,  type: "curr" },
    { date: 3,  type: "curr" },
    { date: 4,  type: "curr", events: [{ title: "MILO (SURGERY)",  time: "12:30", color: "bg-blue-800" }] },
    { date: 5,  type: "curr" },
    { date: 6,  type: "curr", events: [{ title: "COCO (CHECKUP)",  time: "11:00", color: "bg-rose-500" }] },
    { date: 7,  type: "curr" },
    { date: 8,  type: "curr" },
    { date: 9,  type: "curr", events: [{ title: "LUNA (PILLS)",    time: "2:00",  color: "bg-indigo-500" }] },
    { date: 10, type: "curr" },
    { date: 11, type: "curr" },
    { date: 12, type: "curr" },
    { date: 13, type: "curr" },
    { date: 14, type: "curr" },
    { date: 15, type: "curr" },
    { date: 16, type: "curr" },
    { date: 17, type: "curr" },
    { date: 18, type: "curr" },
    { date: 19, type: "curr" },
    { date: 20, type: "curr" },
    { date: 21, type: "curr" },
    { date: 22, type: "curr" },
    { date: 23, type: "curr" },
    { date: 24, type: "curr" },
  ];

  // ── Inject CRM bookings ke kalender ───────────────────────
  const calendarDays = baseCalendarDays.map((cell) => {
    if (cell.type !== "curr") return cell;

    // Ambil booking yang tanggalnya cocok dengan cell ini (bulan Oktober)
    const matchingBookings = crmBookings.filter((b) => {
      const d = new Date(b.date);
      return d.getDate() === cell.date && d.getMonth() === 9; // Oktober = index 9
    });

    if (matchingBookings.length === 0) return cell;

    const newEvents = matchingBookings.map((b) => ({
      title: `${b.petName.toUpperCase()} (${b.service.split(" ")[0].toUpperCase()})`,
      time: b.timeSlot?.split("–")[0]?.trim() || "09:00",
      color: SERVICE_COLOR[b.service] || "bg-emerald-500",
      isCrm: true,
    }));

    return {
      ...cell,
      events: [...(cell.events || []), ...newEvents],
    };
  });

  return (
    <Container
      className={`${
        darkMode ? "bg-[#1a1a1a] text-white" : "bg-gray-50 text-gray-800"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <SectionTitle title="Appointments" />
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* CRM Booking Alert */}
      {crmBookings.length > 0 && (
        <div className="mb-6 bg-indigo-50 border border-indigo-200 rounded-2xl px-5 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-indigo-700 font-bold text-sm">
              🔗 {crmBookings.length} Booking Baru dari CRM
            </p>
            <p className="text-indigo-500 text-xs mt-0.5">
              Data booking masuk dari halaman guest — ditampilkan di kalender &amp; daftar di bawah.
            </p>
          </div>
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Live Sync
          </span>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <SelectMonth darkMode={darkMode} />
        <h2 className="text-sm font-black tracking-[0.3em]">OCTOBER</h2>
        <div className="flex items-center gap-2">
          <Button type="danger">+</Button>
          <div className={`flex border rounded-lg overflow-hidden text-[10px] font-bold ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            <button className="px-4 py-2 border-r border-inherit hover:bg-gray-100 transition-colors">DAY</button>
            <button className="px-4 py-2 border-r border-inherit hover:bg-gray-100 transition-colors">WEEK</button>
            <button className="px-4 py-2 bg-rose-500 text-white">MONTH</button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className={`border rounded-2xl overflow-hidden shadow-sm ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
        <div className={`grid grid-cols-7 border-b ${darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"}`}>
          {days.map((day) => (
            <div key={day} className="py-4 text-center text-[10px] font-bold text-gray-400 tracking-widest border-r last:border-0 border-inherit">
              {day}
            </div>
          ))}
        </div>
        <div className={`grid grid-cols-7 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
          {calendarDays.map((item, idx) => (
            <CalendarCell key={idx} item={item} darkMode={darkMode}>
              <div className="mt-8 space-y-1">
                {item.events?.map((ev, i) => (
                  <EventLabel key={i} title={ev.title} time={ev.time} color={ev.color} />
                ))}
                {item.date === 12 && (
                  <div className="absolute top-20 left-0 right-[-205%] z-10 h-7 bg-blue-500 text-white text-[9px] font-black flex items-center px-4 rounded-full mx-2 shadow-lg cursor-pointer">
                    CHECKUP: OLA BOLUWATIFE (PATIENT)
                    <span className="ml-auto opacity-70">9:30</span>
                  </div>
                )}
              </div>
            </CalendarCell>
          ))}
        </div>
      </div>

      {/* Appointment Sections */}
      <div className="grid grid-cols-2 gap-5 mt-8">
        {/* Upcoming — gabung static + CRM */}
        <AppointmentSection title="Upcoming Appointments">
          <div className="space-y-4">
            {upcomingAppointments.map((ap) => (
              <div key={ap.id} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${ap.color}`}></div>
                <div>
                  <h1 className="font-bold text-sm">{ap.title}</h1>
                  <p className="text-xs text-gray-400">{ap.date}</p>
                </div>
              </div>
            ))}
            {/* CRM Bookings */}
            {crmBookings.slice(0, 4).map((bkg) => (
              <div key={bkg.id} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${SERVICE_COLOR[bkg.service] || "bg-emerald-200"} opacity-70`}></div>
                <div>
                  <h1 className="font-bold text-sm">
                    {bkg.petName} — {bkg.service.split(" ")[0]}
                    <span className="ml-2 bg-indigo-100 text-indigo-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">CRM</span>
                  </h1>
                  <p className="text-xs text-gray-400">{bkg.dateFormatted}</p>
                </div>
              </div>
            ))}
          </div>
        </AppointmentSection>

        <AppointmentSection title="Emergency Cases">
          <div className="space-y-4">
            {emergencyCases.map((ec) => (
              <div key={ec.id} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${ec.color}`}></div>
                <div>
                  <h1 className="font-bold text-sm">{ec.title}</h1>
                  <p className="text-xs text-gray-400">{ec.room}</p>
                </div>
              </div>
            ))}
          </div>
        </AppointmentSection>
      </div>
    </Container>
  );
}
