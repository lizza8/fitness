"use client";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

const locales = {
  "en-US": enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [
  {
    title: "Boiler inspection",
    start: new Date(),
    end: new Date()
  },
  {
    title: "Elevator upgrade",
    start: new Date(new Date().setDate(new Date().getDate() + 2)),
    end: new Date(new Date().setDate(new Date().getDate() + 2))
  }
];

export function MaintenanceCalendar() {
  return (
    <div className="glass-panel h-[280px] rounded-3xl p-4">
      <p className="text-sm font-semibold text-[var(--text-primary)]">
        Maintenance scheduler
      </p>
      <div className="mt-3 h-[210px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          toolbar={false}
          className="text-xs text-[var(--text-primary)]"
        />
      </div>
    </div>
  );
}
