import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Story",
};

export default function CreateStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
