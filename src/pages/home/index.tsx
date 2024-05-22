import bannerImg from "../../assets/images/banner.jpg";

export const HomePage = () => {
  return (
    <div className="h-screen bg-slate-900">
      <div className="flex flex-col h-full w-full">
        <div className="h-[600px] w-full bg-red-600">
          <img
            src={bannerImg}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 ">
        <div className="text-pink-600 font-bold text-xl font-urbanist text-start">Upcoming Movies</div>

        </div>

      </div>
    </div>
  );
};
