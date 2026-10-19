"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { MEMBER_DEMO_COOKIE } from "@/lib/membros/demo";

const demoCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
};

export async function entrarComoMembroConvidado() {
  const jar = await cookies();
  jar.set(MEMBER_DEMO_COOKIE, "1", demoCookieOptions);
  redirect("/membros");
}

export async function logoutMembro() {
  const jar = await cookies();
  jar.delete(MEMBER_DEMO_COOKIE);
  redirect("/membros/login");
}
