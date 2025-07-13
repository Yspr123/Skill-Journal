import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="flex bg-white rounded-xl shadow hover:shadow-md transition p-4 gap-6 items-center">
      <img
        src={post.image}
        alt={post.title}
        className="w-40 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-xl">{post.title}</h2>
        <p className="text-gray-600">{post.summary}</p>
        <Link
          to={`/post/${post.id}`}
          className="inline-block mt-2 text-blue-600 hover:underline font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
