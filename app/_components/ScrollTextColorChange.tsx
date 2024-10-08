import TextRevealByWord from "@/components/ui/text-reveal";

export default function ScrollTextColorChange() {
  return (
    <>
      <h2 className="font-bold text-4xl text-center text-red-900 underline">
       Text show with scroll page
      </h2>
      <div className="z-10 flex min-h-64 items-center justify-center bg-white dark:bg-black">
        <TextRevealByWord text="Hey Neha Mam How are you" />
      </div>
    </>
  );
}
