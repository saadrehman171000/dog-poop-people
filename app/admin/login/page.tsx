import type { Metadata } from "next";

import { AdminLoginPage } from "@/components/admin/admin-login-page";

export const metadata: Metadata = {
  title: "Admin Login | Dog Poop People",
  description: "Dog Poop People administrator login.",
};

export default function Page() {
  return <AdminLoginPage />;
}
