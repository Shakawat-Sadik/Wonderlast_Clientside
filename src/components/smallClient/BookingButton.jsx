"use client";
import React from "react";
import { ActionButton } from "./LinkButton";
import { MoveUpRightIcon } from "lucide-react";

const BookingButton = ({bookingFunc, bookUrlPath}) => {
  const handleBooking = async (urlPath) => {
      try {
          const res = await bookingFunc(urlPath);
          console.log("Booking Response:", urlPath, res);
          if (res.ok) {
              console.log(`Destination Booked successfully. Response:${res.status} ${res.statusText}`);
              // redirect(route); --- IGNORE ---
          }
      } catch (e) {
          console.error("Error in handleBooking:", e);
      }
  }
  
  return (
    <ActionButton
      onClickFunc={() => handleBooking(bookUrlPath)}
      variant="primary"
      className="flex items-center uppercase underline text-primary font-semibold ml-3 my-2"
    >
      <span>Book Now </span><MoveUpRightIcon size={16}/>
    </ActionButton>
  );
};

export default BookingButton;
