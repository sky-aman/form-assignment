export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
