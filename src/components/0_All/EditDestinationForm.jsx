"use client"
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

const EditDestinationForm = ({editDestination, initialData}) => {
    const {destinationName, country, category, price, duration, departureDate, imageURL, description} = initialData ?? {};
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        editDestination(formData, "destinations");
    }
    
    return (
    <div className="flex items-center justify-center p-10 shadow-md rounded-md bg-background/50">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-balance text-2xl font-semibold text-foreground dark:text-foreground">
          Edit destination
        </h3>
        <p className="text-pretty mt-1 text-sm text-muted-foreground dark:text-muted-foreground">
          Update the details for your destination
        </p>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full">
              <Field className="gap-2">
                <FieldLabel htmlFor="destinationName">
                  Destination name
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  type="text"
                  id="destinationName"
                  name="destinationName"
                  autoComplete="destination-name"
                  placeholder="Type your destination here..."
                  defaultValue={destinationName}
                  required
                />
              </Field>
            </div>
            <div className="col-span-full sm:col-span-3">
              <Field className="gap-2">
                <FieldLabel htmlFor="country">
                  Country
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  type="text"
                  id="country"
                  name="country"
                  autoComplete="country"
                  placeholder="Country name"
                  defaultValue={country}
                  required
                />
              </Field>
            </div>
            <div className="col-span-full sm:col-span-3">
              <Field className="gap-2">
                <FieldLabel htmlFor="category">
                  Category
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Select name="category" defaultValue={category} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mountain">Mountain</SelectItem>
                      <SelectItem value="beach">Beach</SelectItem>
                      <SelectItem value="city">City</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="cultural">Cultural</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
              </Field>
            </div>
            <div className="col-span-full sm:col-span-3">
              <Field className="gap-2">
                <FieldLabel htmlFor="price">
                  Price
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  autoComplete="price"
                  placeholder="$"
                  defaultValue={price}
                  required
                />
              </Field>
            </div>
            <div className="col-span-full sm:col-span-3">
              <Field className="gap-2">
                <FieldLabel htmlFor="duration">
                  Duration
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  type="text"
                  id="duration"
                  name="duration"
                  autoComplete="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                  defaultValue={duration}
                  required
                />
              </Field>
            </div>
            <div className="col-span-full">
              <Field className="gap-2">
                <FieldLabel htmlFor="departureDate">
                  Departure Date
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  autoComplete="date"
                  placeholder="departureDate"
                  defaultValue={departureDate}
                  required
                />
              </Field>
            </div>
            <div className="col-span-full">
              <Field className="gap-2">
                <FieldLabel htmlFor="imageURL">
                  Image URL
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  type="url"
                  id="imageURL"
                  name="imageURL"
                  autoComplete="imageURL"
                  placeholder="https://example.com/image.jpg"
                  defaultValue={imageURL}
                  required
                />
              </Field>
            </div>
            <div className="col-span-full">
              <Field className="gap-2">
                  <FieldLabel htmlFor="workspace-description">
                    Description
                  </FieldLabel>
                  <Textarea
                    id="workspace-description"
                    name="workspace-description"
                    rows={5}
                    placeholder="Describe the travel experience..."
                    defaultValue={description}
                  />
                  <FieldDescription>
                    Not Mandatory
                  </FieldDescription>
                </Field>
            </div>
          </div>
          <Separator className="my-6" />Submit
          <div className="flex items-center justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              className="whitespace-nowrap"
            >
              Cancel
            </Button>
            <Button type="submit" className="whitespace-nowrap">
              Confirm Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default EditDestinationForm;