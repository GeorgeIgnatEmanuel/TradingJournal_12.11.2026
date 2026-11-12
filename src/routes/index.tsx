import { createFileRoute } from "@tanstack/react-router";
import { JournalApp } from "@/components/journal/shell";

export const Route = createFileRoute("/")({
  component: JournalApp,
});
