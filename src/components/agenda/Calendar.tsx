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

  const formattedDate = dayjs(currentDate)
    .format('D [de] MMMM [de] YYYY')
    .toUpperCase();

  return (
    <div className="w-full h-dvh">
      <h2 className="text-center text-xl font-bold mb-4">{formattedDate}</h2>
      <Calendar
        localizer={localizer}
        events={[]}
        className="h-full mx-3"
        views={['month', 'week', 'day', 'agenda']}
        view={currentView}
        onView={(view) => setCurrentView(view)}
        date={currentDate} // Aquí pasamos el currentDate correcto
        onNavigate={handleNavigate} // Aquí usamos la función para navegar
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
          // Encabezado de día en las vistas de 'week' y 'day'
          dayHeaderFormat: (date) =>
            dayjs(date).format('dddd DD [de] MMMM [de] YYYY'), // Ejemplo: "Lunes 23 de Octubre de 2024"

          // Encabezado de la vista de 'month'
          monthHeaderFormat: (date) => dayjs(date).format('MMMM [de] YYYY'), // Ejemplo: "Octubre de 2024"

          // Título de cada evento en las vistas de 'week' y 'day'
          agendaDateFormat: (date) => dayjs(date).format('dddd DD [de] MMMM'), // Ejemplo: "Lunes 23 de Octubre"

          // Formato para los eventos en la vista de 'agenda'
          agendaTimeRangeFormat: ({ start, end }) =>
            `${dayjs(start).format('HH:mm')} - ${dayjs(end).format('HH:mm')}`, // Ejemplo: "10:00 - 11:00"

          // Formato para el rango de fechas en el encabezado de la vista 'agenda'
          agendaHeaderFormat: ({ start, end }) =>
            `${dayjs(start).format('D [de] MMMM [de] YYYY')} - ${dayjs(end).format('D [de] MMMM [de] YYYY')}`, // Ejemplo: "23 de Octubre de 2024 - 29 de Octubre de 2024"

          // Formato para la barra superior que muestra el rango de fechas en la vista de 'week'
          dayRangeHeaderFormat: ({ start, end }) =>
            `${dayjs(start).format('D [de] MMMM')} - ${dayjs(end).format('D [de] MMMM')}`, // Ejemplo: "23 de Octubre - 29 de Octubre"

          // Formato de la fecha de cada día en el encabezado de las columnas en la vista 'week'
          dayFormat: (date) => dayjs(date).format('ddd DD/MM'), // Ejemplo: "Lun 23/10"

          // Formato para la vista de 'agenda' para el día y la hora del evento
          timeGutterFormat: (date) => dayjs(date).format('HH:mm'), // Ejemplo: "10:00"
        }}
      />
    </div>
  );
};
