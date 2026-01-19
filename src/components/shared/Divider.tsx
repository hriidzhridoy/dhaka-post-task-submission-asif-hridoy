type DividerProps = {
  className?: string;
};

export default function Divider({ className = "" }: DividerProps) {
  return <div className={`h-px w-full bg-neutral-900 ${className}`} />;
}
