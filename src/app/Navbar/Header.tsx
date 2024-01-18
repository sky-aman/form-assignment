import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="#" className="text-2xl font-bold">
            Kids Storyland
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/story" className="hover:underline">
                Stories
              </Link>
            </li>
            <li>
              <Link href="/create-story" className="hover:underline">
                Create Story
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
