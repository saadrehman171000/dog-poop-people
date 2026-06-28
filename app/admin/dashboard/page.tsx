import type { Metadata } from "next";

import { AdminDashboardPage } from "@/components/admin/admin-dashboard-page";

export const metadata: Metadata = {
  title: "Admin Dashboard | Dog Poop People",
  description: "Dog Poop People admin dashboard with mock business data.",
};

export default function Page() {
  return <AdminDashboardPage />;
}
