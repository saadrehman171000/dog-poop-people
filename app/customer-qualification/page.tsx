import type { Metadata } from "next";

import { CustomerQualificationPage } from "@/components/home/customer-qualification-page";

export const metadata: Metadata = {
  title: "Request a Service | Dog Poop People",
  description:
    "Submit a service request for Dog Poop People in Loudoun County, Virginia.",
};

export default function Page() {
  return <CustomerQualificationPage />;
}
