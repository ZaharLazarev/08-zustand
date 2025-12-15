import { CreatedNoteParamsType } from "@/types/note";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type NoteDraftStore = {
  draft: CreatedNoteParamsType;
  setDraft: (note: CreatedNoteParamsType) => void;
  clearDraft: () => void;
};

const initialDraft: CreatedNoteParamsType = {
  title: "",
  content: "",
  tag: "",
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "note-draft",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
