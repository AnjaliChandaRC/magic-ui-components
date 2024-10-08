import CoolModeAnimate from "./_components/CoolModeAnimate";
import GradientAnimateText from "./_components/GradientAnimateText";
import ScrollTextColorChange from "./_components/ScrollTextColorChange";
import HyperTextAnimation from "./_components/HyperTextAnimation";
import WordRotateDemo from "./_components/WordRotateDemo";
import TypingAnimationDemo from "./_components/TypingAnimationDemo";
import ButtonDock from "./_components/ButtonDock";

export default function Home() {
  return (
    <>
      <ButtonDock/>
      <TypingAnimationDemo/>
      <CoolModeAnimate />
      <HyperTextAnimation/>
      <GradientAnimateText />
      <ScrollTextColorChange />
      <WordRotateDemo />
    </>
  );
}
