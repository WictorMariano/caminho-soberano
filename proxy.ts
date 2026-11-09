import { NextResponse, type NextRequest } from "next/server";

import { ADMIN_DEMO_COOKIE } from "@/lib/admin/demo";
import { MEMBER_DEMO_COOKIE } from "@/lib/membros/demo";
import { updateSession } from "@/lib/supabase/proxy";

const ADMIN_LOGIN = "/admin/login";
const MEMBERS_LOGIN = "/membros/login";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/membros")) {
    const { response, hasUser } = await updateSession(request);
    const isDemo = request.cookies.get(MEMBER_DEMO_COOKIE)?.value === "1";
    const isPublic = pathname === MEMBERS_LOGIN || pathname === "/membros/cadastro";
    if (!hasUser && !isDemo && !isPublic) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = MEMBERS_LOGIN;
      loginUrl.search = "";
      const redirect = NextResponse.redirect(loginUrl);
      response.cookies.getAll().forEach((cookie) => redirect.cookies.set(cookie));
      return redirect;
    }
    return response;
  }

  const { response, hasUser } = await updateSession(request);
  const isDemo = request.cookies.get(ADMIN_DEMO_COOKIE)?.value === "1";

  if (!hasUser && !isDemo && pathname !== ADMIN_LOGIN) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = ADMIN_LOGIN;
    loginUrl.search = "";
    const redirect = NextResponse.redirect(loginUrl);
    response.cookies.getAll().forEach((cookie) => redirect.cookies.set(cookie));
    return redirect;
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*", "/membros/:path*"],
};
