function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        className="px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded ${currentPage === i + 1
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-200"
            }`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
