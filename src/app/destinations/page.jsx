import LinkButton from "@/components/smallClient/LinkButton";
import { Button } from "@/components/ui/button";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogClose,
} from "@/components/ui/morphing-dialog";
import { dateChange } from "@/lib/providers";
import { TrashIcon } from "lucide-react";
import { PencilIcon } from "lucide-react";
import { CalendarRangeIcon } from "lucide-react";
import { CalendarClockIcon } from "lucide-react";
import { MapPin } from "lucide-react";
import { MoveUpRightIcon } from "lucide-react";
import { redirect } from "next/navigation";

const DestinationsPage = async () => {
    const destinations = await fetch("http://localhost:5000/destinations").then(res => res.json());
    console.log(destinations);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
            {
                destinations.map(({_id, category, country, departureDate, destinationName, duration, imageURL, description, price}) => (
                    <MorphingDialog key={_id} className="cursor-pointer">
                        <MorphingDialogTrigger className="flex flex-col p-5 bg-background/50 rounded-3xl shadow-(--shadow-all-around-hover) hover:shadow-(--shadow-all-around) h-full transition-all duration-300">
                            <MorphingDialogImage src={imageURL} alt={destinationName} className="w-full h-40 rounded-t-md"/>
                            <div className="m-3 flex justify-between">
                                <div className="flex flex-col">
                                    <MorphingDialogTitle>{destinationName}</MorphingDialogTitle>
                                    <MorphingDialogSubtitle>{country}</MorphingDialogSubtitle>
                                    <MorphingDialogSubtitle className="flex items-center gap-1">
                                        <CalendarClockIcon size={14} /> 
                                        <span className="pt-1.25">{
                                            duration
                                        }</span>
                                    </MorphingDialogSubtitle>
                                </div> 
                                <div className="flex items-center">
                                    <span className="font-medium text-2xl mb-0">৳{price}</span><span className="font-light text-sm mt-2">/Person</span>
                                </div>
                            </div>
                            <div className="flex items-center uppercase underline text-primary font-semibold ml-3 my-2">
                                Book Now <MoveUpRightIcon size={16}/>
                            </div>
                        </MorphingDialogTrigger>

                        <MorphingDialogContainer>
                            <MorphingDialogContent className="flex flex-col gap-2 max-h-192">
                            <MorphingDialogClose />
                            <MorphingDialogImage src={imageURL} alt={destinationName} className="w-full h-80 rounded-t-md" />
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <MorphingDialogSubtitle className="flex items-center gap-1"><MapPin size={12} /> {country}</MorphingDialogSubtitle>
                                    <MorphingDialogTitle>{destinationName}</MorphingDialogTitle>
                                    <MorphingDialogSubtitle className="flex items-center gap-1"><CalendarRangeIcon size={12} /> {dateChange(departureDate)}</MorphingDialogSubtitle>
                                </div>
                                <div className="font-semibold">
                                    ৳{price}
                                </div>
                            </div>
                            <MorphingDialogDescription className="h-fit overflow-auto">
                                {description}
                            </MorphingDialogDescription>

                            <div className="flex justify-between items-center">
                                <LinkButton route={`/destinations/${_id}`} className="bg-primary text-background">
                                    Detail Page
                                </LinkButton>
                                <div className="flex gap-2">
                                    <LinkButton route={`/destinations/${_id}/edit-destination`} variant="secondary" className="flex items-center">
                                       <PencilIcon size={8} /> <span>Edit</span>
                                    </LinkButton>
                                    <LinkButton variant="destructive" className="flex items-center">
                                       <TrashIcon size={8} /> <span>Delete</span>
                                    </LinkButton>
                                </div>
                            </div>
                            </MorphingDialogContent>
                        </MorphingDialogContainer>
                    </MorphingDialog>
                ))
            }
        </div>
    );
};

export default DestinationsPage;