export default function Index() {
  const stats = [
    { label: "Total rooms", value: "42", change: "+4 this month" },
    { label: "Active bookings", value: "128", change: "+18 today" },
    { label: "Pending approvals", value: "17", change: "Needs review" },
    { label: "Available now", value: "26", change: "62% capacity" },
  ];

  const reservations = [
    {
      room: "Conference A",
      user: "Sok Dara",
      time: "09:00 - 10:30",
      status: "Approved",
    },
    {
      room: "Lab 204",
      user: "Mina Chen",
      time: "11:00 - 12:00",
      status: "Pending",
    },
    {
      room: "Meeting B",
      user: "Rithy San",
      time: "13:30 - 15:00",
      status: "Approved",
    },
    {
      room: "Training Hall",
      user: "Admin Team",
      time: "15:30 - 17:00",
      status: "Review",
    },
  ];

  const rooms = [
    { name: "Conference A", status: "Occupied", usage: "80%" },
    { name: "Meeting B", status: "Available", usage: "30%" },
    { name: "Lab 204", status: "Maintenance", usage: "0%" },
    { name: "Training Hall", status: "Reserved", usage: "55%" },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-emerald-700">
              Admin overview
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
              Reservation activity
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Monitor room availability, booking requests, and daily approval
              work from one dashboard.
            </p>
          </div>

          <div className="flex gap-2">
            <button className="h-10 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Export
            </button>
            <button className="h-10 rounded-lg bg-emerald-600 px-4 text-sm font-bold text-white transition hover:bg-emerald-700">
              Add room
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-3xl font-bold text-slate-950">
                {stat.value}
              </p>
              <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h3 className="font-bold text-slate-950">Today reservations</h3>
              <p className="mt-1 text-sm text-slate-500">
                Latest booking requests and approvals
              </p>
            </div>
            <button className="text-sm font-bold text-emerald-700 hover:text-emerald-800">
              View all
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-bold">Room</th>
                  <th className="px-5 py-3 font-bold">Requested by</th>
                  <th className="px-5 py-3 font-bold">Time</th>
                  <th className="px-5 py-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {reservations.map((reservation) => (
                  <tr key={`${reservation.room}-${reservation.time}`}>
                    <td className="px-5 py-4 font-semibold text-slate-950">
                      {reservation.room}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {reservation.user}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {reservation.time}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                          reservation.status === "Approved"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {reservation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h3 className="font-bold text-slate-950">Room status</h3>
            <p className="mt-1 text-sm text-slate-500">
              Current usage by important rooms
            </p>
          </div>

          <div className="space-y-4">
            {rooms.map((room) => (
              <div key={room.name}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      {room.name}
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      {room.status}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-slate-700">
                    {room.usage}
                  </p>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-emerald-600"
                    style={{ width: room.usage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
