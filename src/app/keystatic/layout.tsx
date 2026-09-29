export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
      {children}
    </div>
  );
}
