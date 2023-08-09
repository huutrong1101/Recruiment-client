import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";

interface DateTimePickerValueProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

export default function DateTimePickerValue({
  value,
  onChange,
}: DateTimePickerValueProps) {
  const minDateTime = dayjs(); // Thời gian hiện tại

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <DateTimePicker
          label="Choose Date and Time"
          value={value}
          onChange={onChange}
          minDateTime={minDateTime} // Giới hạn ngày và giờ tối thiểu
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
