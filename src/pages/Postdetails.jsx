import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]); // <-- NEW
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // Fetch post
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const postData = await res.json();
      setPost(postData);

      // Fetch author/user info
      const userRes = await fetch(
        `https://jsonplaceholder.typicode.com/users/${postData.userId}`
      );
      const userData = await userRes.json();
      setUser(userData);

      // Fetch comments for this post
      const commentsRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const commentsData = await commentsRes.json();
      setComments(commentsData);

      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) return <div className="text-center py-16">Loading post...</div>;
  if (!post) return <div className="text-center py-16">Post not found.</div>;

  return (
    <div className="bg-white rounded-xl p-8 shadow">
      <button
        className="mb-4 text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <div className="text-gray-600 mb-4">{post.body}</div>
      {user && (
        <div className="mb-4 text-sm text-gray-500">
          By <span className="font-semibold">{user.name}</span> ({user.email})
        </div>
      )}
      <img
        src={`https://source.unsplash.com/600x300/?blog,writing,${id}`}
        alt={post.title}
        className="rounded-xl max-h-80 w-full object-cover mt-6"
      />

      {/* Comments Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Comments</h3>
        {comments.length === 0 ? (
          <div className="text-gray-500">No comments yet.</div>
        ) : (
          <ul className="space-y-4">
            {comments.map((c) => (
              <li key={c.id} className="bg-gray-50 border rounded p-4">
                <div className="font-medium">
                  {c.name}{" "}
                  <span className="text-xs text-gray-400">({c.email})</span>
                </div>
                <div className="text-gray-600">{c.body}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default PostDetails;
