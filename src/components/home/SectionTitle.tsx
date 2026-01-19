export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
        {children}
      </h3>
      <div className="mt-2 h-px w-full bg-neutral-200" />
    </div>
  );
}
