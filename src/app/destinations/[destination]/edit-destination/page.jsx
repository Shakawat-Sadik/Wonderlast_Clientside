import BookingForm from "@/components/0_All/AddDestinationForm";
import { editDestination } from "@/lib/actions";
import React from "react";

const EditDestinationPage = ({params}) => {
  console.log(params);
  return (
    <div className="flex flex-col gap-8 md:gap-14 lg:gap-22 justify-center items-center flex-1 h-full m-5 md:m-10 lg:m-20">
      <div className="w-full">
        <h2 className="text-6xl">Edit a Travel Package</h2>
      </div>
      <BookingForm editDestination={editDestination} />
    </div>
  );
};

export default EditDestinationPage;
