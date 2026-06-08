import EditDestinationForm from "@/components/0_All/EditDestinationForm";
import { deleteDestination, editDestination } from "@/lib/actions";
import React from "react";

const EditDestinationPage = async ({params}) => {
  const {destination} = await params;
  const res = await fetch(`http://localhost:5000/destinations/${destination}`);
  const data = await res.json();

  return (
    <div className="flex flex-col gap-8 md:gap-14 lg:gap-22 justify-center items-center flex-1 h-full m-5 md:m-10 lg:m-20">
      <div className="w-full">
        <h2 className="text-6xl">Edit a Travel Package</h2>
      </div>
      <EditDestinationForm editDestination={editDestination} deleteDestination={deleteDestination} initialData={data} urlPath = {`destinations/${destination}`} />
    </div>
  );
};

export default EditDestinationPage;
