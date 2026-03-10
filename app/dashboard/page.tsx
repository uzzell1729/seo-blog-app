// app/dashboard/page.tsx - Dashboard overview
export default function DashboardOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Generate Blog</h2>
          <p className="text-gray-600 mb-4">Create SEO-optimized content.</p>
          <a href="/dashboard/generate" className="bg-blue-500 text-white px-4 py-2 rounded">Start</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">My Posts</h2>
          <p className="text-gray-600 mb-4">View and edit your posts.</p>
          <a href="/dashboard/posts" className="bg-blue-500 text-white px-4 py-2 rounded">View</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Videos</h2>
          <p className="text-gray-600 mb-4">Generate AI videos from blogs.</p>
          <a href="/dashboard/videos" className="bg-blue-500 text-white px-4 py-2 rounded">Create</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Integrations</h2>
          <p className="text-gray-600 mb-4">Set up WordPress, FTP, Revid.ai.</p>
          <a href="/dashboard/integrations" className="bg-blue-500 text-white px-4 py-2 rounded">Configure</a>
        </div>
      </div>
    </div>
  );
}
