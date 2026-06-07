import AddDestinationForm from "@/components/0_All/AddDestinationForm";
import { addDestination } from "@/lib/actions";

const AddDestinationPage = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-14 lg:gap-22 justify-center items-center flex-1 h-full m-5 md:m-10 lg:m-20">
      <div className="w-full">
        <h2 className="text-6xl">Add New Travel Package</h2>
      </div>
      <AddDestinationForm addDestination={addDestination}/>
    </div>
  );
};

export default AddDestinationPage;
