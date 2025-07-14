import { useEffect, useState } from "react";
import PostCard from "../components/Postcard";
import Pagination from "../components/Pagination";

const POSTS_PER_PAGE = 5;

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const visiblePosts = posts.slice(start, end);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6 text-center">Skill Journal</h1>
      {loading ? (
        <div className="text-center text-gray-500 py-16">Loading posts...</div>
      ) : (
        <>
          <div className="space-y-6">
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </section>
  );
}

export default Home;
