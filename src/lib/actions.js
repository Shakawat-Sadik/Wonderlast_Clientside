import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addDestination = async (submittedForm, ssd) => { // ssd = Server Side Directory
    "use server"
    try {
        const data = Object.fromEntries(submittedForm.entries());
        console.log("Form Data:", data);

        const res = await fetch(`http://localhost:5000/${ssd}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error("Failed to add destination");
        } else {
            revalidatePath("/destinations");
            redirect("/destinations");
        }

        const destination = await res.json();
        console.log("Added Destination:", destination);
        return destination;
    } catch (e) {
        console.error("Error adding destination:", e);
        throw e;
    }
}