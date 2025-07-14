export default function Footer() {
  return (
    <footer className="bg-white border-t text-gray-600 text-sm mt-8 flex-shrink-0 w-full">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-2">
        <div>
          &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-900">Skill Journal</span>
        </div>
        <div>
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/sivaprasadreddyyeddula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Sivaprasad Reddy Yeddula
          </a>
        </div>
      </div>
    </footer>
  );
}
