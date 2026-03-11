// app/dashboard/layout.tsx
import { redirect } from 'next/navigation';
import { supabase } from '../../../lib/supabase';  // Full relative from app/dashboard/layout.tsx
import DashboardSidebar from '../../../components/DashboardSidebar';  // Full relative

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar user={user} />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
