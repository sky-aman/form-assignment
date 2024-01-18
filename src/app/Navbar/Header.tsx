export default function Header() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Kids Storyland
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/stories" className="hover:underline">
                Stories
              </a>
            </li>
            <li>
              <a href="/create-story" className="hover:underline">
                Create Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
