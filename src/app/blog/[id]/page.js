// src/app/blog/[id]/page.js
import Link from "next/link";
import { blogPosts } from "@/data/posts";
import { notFound } from "next/navigation";

// This helps Next.js know which blog posts exist
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }) {
  // FIX: In Next.js 15, params is a Promise, so we must 'await' it
  const { id } = await params;
  
  // Find the post that matches the URL ID
  const post = blogPosts.find((p) => p.id === id);

  // If no post found, show 404
  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block font-medium">
        ← Back to Blog
      </Link>
      
      <article className="prose lg:prose-xl">
        <header className="mb-10 border-b border-gray-100 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {post.title}
          </h1>
          <time className="text-slate-500">{post.date}</time>
        </header>

        {/* This renders your HTML content safely */}
        <div 
          className="text-slate-700 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </main>
  );
}