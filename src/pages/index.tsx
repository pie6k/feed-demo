import Link from 'next/link';
import { MainLayout } from '~app/layouts/Main';
import { DashboardView } from '~app/views/Dashboard';

export default function IndexPage() {
  return (
    <MainLayout title="Home | Next.js + TypeScript Example">
      <DashboardView />
    </MainLayout>
  );
}
