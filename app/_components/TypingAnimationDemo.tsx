import TypingAnimation from "@/components/ui/typing-animation";

export default function TypingAnimationDemo() {
  return (
    <>
      <h2 className="font-bold text-4xl text-center pt-20 text-red-900 underline">
        Typing Animation
      </h2>
      <TypingAnimation
        className="text-4xl font-bold pt-5"
        text="My Name Is Anjali"
      />
    </>
  );
}
