import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-yellow-200 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Kids Storyland</h1>
        <p className="text-lg text-gray-700">
          Where imaginations come to life!
        </p>
        <Link
          href="/stories"
          className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Explore Stories
        </Link>
      </div>
    </section>
  );
}
