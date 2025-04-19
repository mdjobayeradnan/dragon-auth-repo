import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-5  w-[800px] mx-auto">
            <p className="bg-red-500 text-white p-3 font-extralight">latest</p>
            <Marquee pauseOnHover = {true}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
        </div>
    );
};

export default LatestNews;