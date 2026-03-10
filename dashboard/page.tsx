// app/dashboard/page.tsx
export default function DashboardOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Generate Blog</h2>
          <p className="text-gray-600 mb-4">Create SEO-optimized content.</p>
          <Link href="/dashboard/generate" className="bg-blue-500 text-white px-4 py-2 rounded">Start</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">My Posts</h2>
          <p className="text-gray-600 mb-4">View and edit your posts.</p>
          <Link href="/dashboard/posts" className="bg-blue-500 text-white px-4 py-2 rounded">View</Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Integrations</h2>
          <p className="text-gray-600 mb-4">Set up WP, FTP, Revid.ai.</p>
          <Link href="/dashboard/integrations" className="bg-blue-500 text-white px-4 py-2 rounded">Configure</Link>
        </div>
      </div>
    </div>
  );
}
