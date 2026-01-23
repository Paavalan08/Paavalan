import Link from "next/link";
import { blogPosts } from "@/data/posts";

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
        <p className="text-lg text-slate-600">Thoughts on coding, projects, and my journey.</p>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
                  {post.date}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {post.summary}
              </p>
              <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                Read more →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}