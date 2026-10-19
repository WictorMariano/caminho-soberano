import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import {
  MEMBER_DEMO_COOKIE,
  MEMBER_DEMO_EMAIL,
  MEMBER_DEMO_NAME,
} from "@/lib/membros/demo";

export type MemberSession =
  | { status: "anonymous" }
  | { status: "member"; email: string; name: string; demo: true };

export const getMemberSession = cache(async (): Promise<MemberSession> => {
  await connection();
  const jar = await cookies();
  if (jar.get(MEMBER_DEMO_COOKIE)?.value === "1") {
    return {
      status: "member",
      email: MEMBER_DEMO_EMAIL,
      name: MEMBER_DEMO_NAME,
      demo: true,
    };
  }
  return { status: "anonymous" };
});

export async function requireMember() {
  const session = await getMemberSession();
  if (session.status === "member") return session;
  redirect("/membros/login");
}
