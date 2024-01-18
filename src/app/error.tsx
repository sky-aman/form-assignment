"use client";

export default function ErrorPage() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-red-500 mb-4">Error</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! Something went wrong.</p>
      <a
        href="/"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
}
