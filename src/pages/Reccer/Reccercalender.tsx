import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { green } from "@mui/material/colors";
import Events from "../Events/Events";

const Reccercalender = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure yo delete the event '${selected.event.title}'`,
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Box display="flex" backgroundColor="#F8FDFB" justifyContent="space-between">
        <Box flex="1 1 100%" ml="15px" mr="20px">
          <FullCalendar
            height="88vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "1234",
                title: "All-day event",
                date: "2023-07-13",
              },
              {
                id: "4321",
                title: "Time event",
                date: "2023-12-09",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Reccercalender;
