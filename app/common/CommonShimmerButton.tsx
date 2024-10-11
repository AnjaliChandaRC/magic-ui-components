import ShimmerButton from "@/components/ui/shimmer-button";
interface BUTTON {
  text: string;
}
export default function CommonShimmerButton({ text }:BUTTON) {
  return (
    <>
      <h2 className="font-bold text-4xl text-center text-red-900 underline pt-20">
        Shimmer Button
      </h2>
      <div className="z-10 mx-auto w-fit mt-5">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            {text}
          </span>
        </ShimmerButton>
      </div>
    </>
  );
}
