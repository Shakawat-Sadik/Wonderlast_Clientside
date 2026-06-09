"use client";

import React from "react";
import { TrashIcon } from "lucide-react";
import { ActionButton } from "./LinkButton";

const DeleteButton = ({deleteFunc, delUrlPath}) => {
  const handleDelete = async (urlPath) => {
      try {
          const res = await deleteFunc(urlPath);
          console.log("Delete Response:", res);
          if (res.ok) {
              console.log(`Destination deleted successfully. Response:${res.status} ${res.statusText}`);
              // redirect(route); --- IGNORE ---
          }
      } catch (e) {
          console.error("Error in handleDelete:", e);
      }
  }
  
  return (
    <ActionButton
      onClickFunc={() => handleDelete(delUrlPath)}
      variant="destructive"
      className="flex items-center"
    >
      <TrashIcon size={8} /> <span>Delete</span>
    </ActionButton>
  );
};

export default DeleteButton;
