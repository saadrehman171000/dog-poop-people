import type { Metadata } from "next";

import { CustomerQualificationPage } from "@/components/home/customer-qualification-page";

export const metadata: Metadata = {
  title: "Customer Qualification | Dog Poop People",
  description:
    "Submit a frontend-only customer qualification request for Dog Poop People service in Loudoun County, Virginia.",
};

export default function Page() {
  return <CustomerQualificationPage />;
}
