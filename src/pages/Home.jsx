// src/Pages/Home.jsx

import PostCard from "../components/Postcard";

const posts = [
  {
    id: 1,
    title: "Mastering the Art of Effective Communication",
    summary: "Explore the nuances of effective communication, from active listening to clear articulation.",
    image: "https://source.unsplash.com/400x200/?communication,office",
  },
  {
    id: 2,
    title: "The Power of Mindful Practice in Skill Development",
    summary: "Discover how focused attention and deliberate repetition can accelerate your learning.",
    image: "https://source.unsplash.com/400x200/?mindfulness,meditation",
  },
  {
    id: 3,
    title: "Building a Growth Mindset: Embracing Challenges",
    summary: "Learn strategies to overcome obstacles, build resilience, and grow from setbacks.",
    image: "https://source.unsplash.com/400x200/?growth,motivation",
  },
];

function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Skill Journal</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default Home;
