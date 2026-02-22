// app/page.tsx - Home page (root route)
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-5xl font-bold mb-6 text-center">SEO Blog Builder</h1>
      <p className="text-xl text-gray-600 mb-8">
        AI-powered tool for generating optimized blogs, auto-posting to WordPress, and creating videos.
      </p>
      <p className="text-lg">Deployment successful! Dashboard and features coming next.</p>
    </main>
  );
}
