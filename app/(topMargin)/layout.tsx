export default function HeaderInFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-dvh mt-32">{children}</main>;
}
