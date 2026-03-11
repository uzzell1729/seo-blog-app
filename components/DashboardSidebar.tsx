// components/DashboardSidebar.tsx
'use client';

import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';  // From components to root/lib
import Link from 'next/link';

export default function DashboardSidebar({ user }: { user: any }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="w-64 bg-white border-r flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">SEO Blog Builder</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/dashboard" className="block p-2 hover:bg-gray-100 rounded">Overview</Link>
        <Link href="/dashboard/generate" className="block p-2 hover:bg-gray-100 rounded">Generate Blog</Link>
        <Link href="/dashboard/posts" className="block p-2 hover:bg-gray-100 rounded">My Posts</Link>
        <Link href="/dashboard/videos" className="block p-2 hover:bg-gray-100 rounded">Videos</Link>
        <Link href="/dashboard/integrations" className="block p-2 hover:bg-gray-100 rounded">Integrations</Link>
      </nav>
      <div className="p-4 border-t">
        <button onClick={handleLogout} className="w-full text-left p-2 hover:bg-gray-100 rounded">Logout</button>
      </div>
    </div>
  );
}
