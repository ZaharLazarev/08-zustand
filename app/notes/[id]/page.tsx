import { fetchNoteById } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoteDetails from "./NoteDetails.client";
import { Metadata } from "next";

interface NotesProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: NotesProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `${id}`,
    description: `The page of element with id:${id}`,
    openGraph: {
      title: `${id}`,
      description: `The page of element with id:${id}`,
      url: `https://08-zustand-sigma-ashen.vercel.app/notes/${id}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub",
        },
      ],
    },
  };
}
export default async function Notes({ params }: NotesProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetails />
    </HydrationBoundary>
  );
}
