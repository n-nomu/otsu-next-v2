import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F5F3EF] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-light text-[#1A1A1A] mb-4 font-serif">
          404
        </h1>
        <h2 className="text-2xl font-light text-[#1A1A1A] mb-6 font-serif">
          Page Not Found
        </h2>
        <p className="text-[#1A1A1A]/70 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. 
          Please check the URL or return to our collection.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#1A1A1A] text-[#F5F3EF] text-sm tracking-wider hover:bg-[#B8735A] transition-colors duration-300"
        >
          RETURN TO HOME
        </Link>
      </div>
    </main>
  );
}