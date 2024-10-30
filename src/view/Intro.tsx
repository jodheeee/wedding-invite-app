import introImage from '@/assets/intro.jpg';
import mouseCursorImage from '@/assets/mouse-cursor.png';

const Intro = () => {
  return (
    <>
      <div
        className="h-full w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${introImage})` }}
      ></div>
      <img
        src={mouseCursorImage}
        className="animate-bounce absolute left-[44.5%] bottom-30"
        width={43.5}
      />
    </>
  );
};

export default Intro;
