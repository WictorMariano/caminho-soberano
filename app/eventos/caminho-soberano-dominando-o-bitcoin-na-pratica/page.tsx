import { redirect } from "next/navigation";

import { EVENT_PATH } from "@/lib/event-bitcoin-pratica";

export default function LegacyEventPage() {
  redirect(EVENT_PATH);
}
