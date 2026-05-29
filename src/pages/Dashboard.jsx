import { FaArrowUp } from "react-icons/fa";

import Card from "../components/data-display/Card";

export default function Dashboard() {

  return (
    <div className="space-y-5">

      {/* Welcome */}
      <div>

        <h1 className="text-red-500 font-bold text-lg">
          Welcome Dr.Putree,
        </h1>

        <p className="text-gray-400 text-sm">
          How're you feeling today?
        </p>

      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-4 gap-5">

        {/* Card 1 */}
        <Card>

          <p className="text-gray-400 text-xs font-semibold uppercase">
            Diagnosticts
          </p>

          <div className="flex justify-center mt-5">

            <div className="relative w-36 h-36 rounded-full border-[14px] border-pink-500 border-t-yellow-400 border-l-blue-700 border-r-purple-500 flex items-center justify-center">

              <div className="text-center">

                <h1 className="text-2xl font-extrabold text-[#2d2dcf]">
                  187.2k
                </h1>

                <p className="text-xs text-gray-400">
                  Appointments
                </p>

              </div>

            </div>

          </div>

          <div className="flex justify-between mt-5 text-xs">

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-700"></div>
              <span>Dogs</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span>Cats</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-500"></div>
              <span>Others</span>
            </div>

          </div>

        </Card>

        {/* Card 2 */}
        <Card>

          <p className="text-gray-400 text-xs font-semibold uppercase">
            Patients
          </p>

          <div className="flex justify-center mt-5">

            <div className="relative w-32 h-32 rounded-full border-[12px] border-[#2d2dcf] border-r-red-500 border-l-yellow-400 flex items-center justify-center">

              <div className="text-center">

                <h1 className="text-2xl font-extrabold text-[#2d2dcf]">
                  11M
                </h1>

                <p className="text-xs text-gray-400">
                  Patients
                </p>

              </div>

            </div>

          </div>

          <div className="mt-5 space-y-2 text-xs">

            <div className="flex justify-between">
              <span>Dogs</span>
              <span>40%</span>
            </div>

            <div className="flex justify-between">
              <span>Cats</span>
              <span>35%</span>
            </div>

            <div className="flex justify-between">
              <span>Others</span>
              <span>25%</span>
            </div>

          </div>

        </Card>

        {/* Card 3 */}
        <div className="bg-[#1d1db8] rounded-3xl p-5 text-white relative overflow-hidden">

          <p className="uppercase text-xs opacity-70">
            Health Index
          </p>

          <div className="flex items-center gap-2 mt-3">

            <h1 className="text-5xl font-extrabold">
              75%
            </h1>

            <FaArrowUp className="text-pink-500 text-2xl" />

          </div>

          <p className="text-sm opacity-70 mt-2">
            Positive results rate
          </p>

          {/* fake graph */}
          <div className="absolute bottom-0 left-0 w-full h-28 bg-blue-500 rounded-t-[100px]"></div>

        </div>

        {/* Card 4 */}
        <Card>

          <p className="text-gray-400 text-xs font-semibold uppercase">
            Overall Appointments
          </p>

          <div className="flex justify-between items-end h-52 mt-5">

            <div className="w-4 bg-yellow-400 rounded-full h-24"></div>

            <div className="w-4 bg-[#2d2dcf] rounded-full h-40"></div>

            <div className="w-4 bg-pink-500 rounded-full h-32"></div>

            <div className="w-4 bg-blue-400 rounded-full h-48"></div>

            <div className="w-4 bg-yellow-400 rounded-full h-28"></div>

            <div className="w-4 bg-[#2d2dcf] rounded-full h-44"></div>

            <div className="w-4 bg-pink-500 rounded-full h-36"></div>

          </div>

        </Card>

      </div>

      {/* SECOND GRID */}
      <div className="grid grid-cols-3 gap-5">

        {/* MAP */}
        <div className="col-span-2 bg-white rounded-3xl p-5 border border-gray-100">

          <p className="text-gray-400 text-xs font-semibold uppercase mb-5">
            Pet Disease Map
          </p>

          <div className="bg-[#f4f7fe] rounded-3xl h-[300px] flex items-center justify-center">

            <h1 className="text-gray-300 text-3xl font-bold">
              WORLD MAP
            </h1>

          </div>

          <div className="grid grid-cols-4 mt-5 gap-5 text-sm">

            <div>
              <h1 className="text-[#2d2dcf] font-bold">
                13M
              </h1>

              <p className="text-gray-400">
                Recovery
              </p>
            </div>

            <div>
              <h1 className="text-yellow-400 font-bold">
                5M
              </h1>

              <p className="text-gray-400">
                Neutral
              </p>
            </div>

            <div>
              <h1 className="text-pink-500 font-bold">
                13M
              </h1>

              <p className="text-gray-400">
                Affected
              </p>
            </div>

            <div>
              <h1 className="text-purple-500 font-bold">
                2M
              </h1>

              <p className="text-gray-400">
                Safe
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-5">

          {/* Upcoming */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100">

            <p className="text-gray-400 text-xs font-semibold uppercase mb-5">
              Upcoming Appointments
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-gray-200"></div>

                <div>

                  <h1 className="font-bold text-sm">
                    Bella Vaccination
                  </h1>

                  <p className="text-xs text-gray-400">
                    Thursday, October 14
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-gray-200"></div>

                <div>

                  <h1 className="font-bold text-sm">
                    Milo Checkup
                  </h1>

                  <p className="text-xs text-gray-400">
                    Monday, November 2
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-gray-200"></div>

                <div>

                  <h1 className="font-bold text-sm">
                    Coco Grooming
                  </h1>

                  <p className="text-xs text-gray-400">
                    Friday, November 10
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Previous */}
          <div className="bg-white rounded-3xl p-5 border border-gray-100">

            <div className="flex justify-between items-center mb-5">

              <p className="text-gray-400 text-xs font-semibold uppercase">
                Previous Appointments
              </p>

              <button className="bg-pink-500 text-white text-xs px-4 py-2 rounded-xl">
                Week
              </button>

            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-gray-200"></div>

                <div>

                  <h1 className="font-bold text-sm">
                    Sick Visit
                  </h1>

                  <p className="text-xs text-gray-400">
                    Friday, August 13
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-gray-200"></div>

                <div>

                  <h1 className="font-bold text-sm">
                    Consultation
                  </h1>

                  <p className="text-xs text-gray-400">
                    Tuesday, July 20
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}