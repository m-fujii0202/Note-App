import React from "react";

export type NewNoteType = {
  content?: string | null;
  id?: string | boolean | null | undefined;
  modDate?: number | null;
  title?: string | null;
};
