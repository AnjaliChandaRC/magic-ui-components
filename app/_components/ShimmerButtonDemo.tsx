import ShimmerButton from "@/components/ui/shimmer-button";

export default function ShimmerButtonDemo() {
  return (
    <>
      <h2 className="font-bold text-4xl text-center text-red-900 underline">
        Shimmer Button
      </h2>
      <div className="z-10 flex min-h-64 items-center justify-center">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Button
          </span>
        </ShimmerButton>
      </div>
    </>
  );
}
