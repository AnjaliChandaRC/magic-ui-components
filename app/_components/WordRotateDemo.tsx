import WordRotate from "@/components/ui/word-rotate";

export default function WordRotateDemo() {
  return (
    <>
      <h2 className="font-bold text-4xl text-center text-red-900 underline">
        Word Rotate
      </h2>
      <WordRotate
        className="text-4xl font-bold text-center pt-5 pb-10"
        words={["Word", "Rotate"]}
      />
    </>
  );
}
