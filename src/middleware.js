import { NextResponse, userAgent } from "next/server";

export function middleware(req) {
  const { device } = userAgent(req);
  const { pathname } = req.nextUrl;

  // ✅ Exclude static assets (including favicon)
  if (
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  // ✅ Define static paths (adjust as needed)
  const staticPaths = ["/about", "/contact", "/services"];
  const segments = pathname.split("/").filter(Boolean);

  // Determine viewport (mobile or desktop)
  const viewport = device.type === "mobile" ? "mobile" : "desktop";

  // ✅ Handle home page redirect
  if (pathname === "/") {
    return NextResponse.rewrite(new URL(`/${viewport}`, req.url));
  }

  // ✅ Skip middleware for static pages
  if (staticPaths.includes(`/${segments[0]}`)) {
    return NextResponse.next();
  }

  // ✅ Allow dynamic routes like [id] pages
  if (segments.length > 1) {
    return NextResponse.next();
  }

  // ✅ Rewrite only if it's not a static page or a dynamic route
  req.nextUrl.pathname = `/${viewport}${pathname}`;
  return NextResponse.rewrite(req.nextUrl);
}

// Middleware matcher
export const config = {
  matcher: ["/:path*"],
};
