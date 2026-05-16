export default function Index() {
  const bookings = [
    {
      room: "Meeting B",
      date: "Today",
      time: "2:30 PM - 4:00 PM",
      status: "Approved",
    },
    {
      room: "Conference A",
      date: "Tomorrow",
      time: "9:00 AM - 10:30 AM",
      status: "Pending",
    },
    {
      room: "Lab 204",
      date: "May 22",
      time: "1:00 PM - 3:00 PM",
      status: "Approved",
    },
  ];

  const rooms = [
    { name: "Meeting B", capacity: "8 people", status: "Available" },
    { name: "Conference A", capacity: "24 people", status: "Reserved" },
    { name: "Training Hall", capacity: "60 people", status: "Available" },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-emerald-700">
              Welcome back
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
              Find and manage your room bookings
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Check your upcoming reservations, browse available rooms, and
              keep booking requests moving.
            </p>
          </div>
          <button className="h-10 rounded-lg bg-emerald-600 px-4 text-sm font-bold text-white transition hover:bg-emerald-700">
            New reservation
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Upcoming bookings
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">3</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Pending requests
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">1</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Available rooms</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">18</p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h3 className="font-bold text-slate-950">My bookings</h3>
            <p className="mt-1 text-sm text-slate-500">
              Your next reservation requests
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {bookings.map((booking) => (
              <div
                key={`${booking.room}-${booking.date}`}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-slate-950">{booking.room}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {booking.date} · {booking.time}
                  </p>
                </div>
                <span
                  className={`w-fit rounded-md px-2.5 py-1 text-xs font-bold ${
                    booking.status === "Approved"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h3 className="font-bold text-slate-950">Available rooms</h3>
            <p className="mt-1 text-sm text-slate-500">
              Rooms you can request now
            </p>
          </div>

          <div className="space-y-3">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="rounded-lg border border-slate-200 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-bold text-slate-950">{room.name}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {room.capacity}
                    </p>
                  </div>
                  <span
                    className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                      room.status === "Available"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {room.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
