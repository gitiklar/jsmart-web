import React from "react";
import moment from 'moment';
import TextInput from "./TextInput";

export default ({ date, setDate }) => {

  const maxDate = moment().subtract(18, 'year').format('YYYY-MM-DD');;

  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
  };
  
  return (
    <TextInput
      autoFocus
      id="date"
      type="date"
      color="secondary"
      InputProps={{inputProps: { max: maxDate } }}
      value={date}
      onChange={(event) => handleDateChange(event)}
    />
  );
};