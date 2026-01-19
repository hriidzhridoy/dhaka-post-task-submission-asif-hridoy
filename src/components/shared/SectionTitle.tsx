export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-neutral-900">{children}</h3>

      {/* underline row */}
      <div className="mt-2 flex items-center">
        {/* short black underline */}
        <span className="h-0.5 w-12 bg-neutral-900" />

        {/* long gray divider */}
        <span className="h-0.5 flex-1 bg-neutral-200" />
      </div>
    </div>
  );
}
