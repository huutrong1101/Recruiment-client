import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'


const Reccercalender = () => {

  const [currentEvents, setCurrentEvents] = useState([])
  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event")
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay

      })
    }
  }
  const handleEventClick = (selected: any) => {
    if (
      window.confirm(`Are you sure yo delete the event '${selected.event.title}'`)

    ) {
      selected.event.remove()
    }
  }

  return (
    <div className="calender-container pb-10">
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'

          }}
          height={'96vh'}
          allDaySlot={false}
          initialView='dayGridMonth'
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={[]}
        />
      </div>
    </div>
  )
}

export default Reccercalender
