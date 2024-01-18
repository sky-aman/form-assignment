import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
      <a
        href="/"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
}
