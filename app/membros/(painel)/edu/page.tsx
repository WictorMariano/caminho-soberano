import type { Metadata } from "next";

import { EduHome } from "@/components/edu/EduHome";
import { getCurriculum } from "@/lib/edu/curriculum";

export const metadata: Metadata = { title: "Edu" };

export default function EduPage() {
  return <EduHome schools={getCurriculum()} />;
}
