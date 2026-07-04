import type { Metadata } from "next";
import { AdminDashboard } from "../components/admin/AdminDashboard";

// Keep the hidden panel out of search indexes.
export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
