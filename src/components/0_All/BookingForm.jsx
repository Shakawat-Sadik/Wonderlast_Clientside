"use client"
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

const BookingForm = ({addDestination}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        addDestination(formData, "destinations");
    }
    return (
    <div className="flex items-center justify-center p-10 shadow-md rounded-md bg-background/50">
      <div className="sm:mx-auto sm:max-w-2xl">
        <h3 className="text-balance text-2xl font-semibold text-foreground dark:text-foreground">
          Register to workspace
        </h3>
        <p className="text-pretty mt-1 text-sm text-muted-foreground dark:text-muted-foreground">
          Take a few moments to register for your company&apos;s workspace
        </p>
        <form onSubmit={handleSubmit} method="post" className="mt-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full">
              <Field className="gap-2">
                <FieldLabel htmlFor="destination-name">
                  Destination name
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Input
                  type="text"
                  id="destination-name"
                  name="destination-name"
                  autoComplete="destination-name"
                  placeholder="Type your destination here..."
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
                <Select name="category" defaultValue="private">
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
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
                  />
                  <FieldDescription>
                    Not Mandatory
                  </FieldDescription>
                </Field>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="flex items-center justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              className="whitespace-nowrap"
            >
              Cancel
            </Button>
            <Button type="submit" className="whitespace-nowrap">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default BookingForm;