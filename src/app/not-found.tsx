import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0c0f0d] px-6 text-center text-white">
      <h1 className="font-serif text-6xl font-bold text-[#8fd4a8]">404</h1>
      <h2 className="mt-4 font-serif text-2xl md:text-3xl">Page Not Found</h2>
      <p className="mt-2 text-white/70">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-sm bg-[#8fd4a8] px-6 py-3 font-semibold text-[#0c0f0d] transition-colors hover:bg-white"
      >
        Return to Home
      </Link>
    </main>
  );
}
