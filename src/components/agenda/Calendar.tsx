'use client';
import { useState } from 'react';
import { Calendar, dayjsLocalizer, View } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const localizer = dayjsLocalizer(dayjs);

export const MyCalendar = () => {
  const [currentView, setCurrentView] = useState<View>('month');
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  return (
    <div className="w-full h-dvh">
      <Calendar
        localizer={localizer}
        events={[]}
        className="h-full mx-3"
        views={['month', 'week', 'day', 'agenda']}
        view={currentView}
        onView={(view) => setCurrentView(view)}
        date={currentDate}
        onNavigate={handleNavigate}
        step={60}
        showMultiDayTimes
        messages={{
          allDay: 'Todo el día',
          previous: 'Anterior',
          next: 'Siguiente',
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
          agenda: 'Agenda',
          noEventsInRange: 'No hay citas registradas',
        }}
        formats={{
          dayHeaderFormat: (date) =>
            dayjs(date).format('dddd DD [de] MMMM [de] YYYY'), // Ejemplo: "Lunes 23 de Octubre de 2024"

          monthHeaderFormat: (date) => dayjs(date).format('MMMM [de] YYYY'), // Ejemplo: "Octubre de 2024"

          agendaDateFormat: (date) => dayjs(date).format('dddd DD [de] MMMM'), // Ejemplo: "Lunes 23 de Octubre"

          agendaTimeRangeFormat: ({ start, end }) =>
            `${dayjs(start).format('HH:mm')} - ${dayjs(end).format('HH:mm')}`, // Ejemplo: "10:00 - 11:00"

          agendaHeaderFormat: ({ start, end }) =>
            `${dayjs(start).format('D [de] MMMM [de] YYYY')} - ${dayjs(end).format('D [de] MMMM [de] YYYY')}`, // Ejemplo: "23 de Octubre de 2024 - 29 de Octubre de 2024"

          dayRangeHeaderFormat: ({ start, end }) =>
            `${dayjs(start).format('D [de] MMMM')} - ${dayjs(end).format('D [de] MMMM')}`, // Ejemplo: "23 de Octubre - 29 de Octubre"

          dayFormat: (date) => dayjs(date).format('ddd DD/MM'), // Ejemplo: "Lun 23/10"

          timeGutterFormat: (date) => dayjs(date).format('HH:mm'), // Ejemplo: "10:00"
        }}
      />
    </div>
  );
};
