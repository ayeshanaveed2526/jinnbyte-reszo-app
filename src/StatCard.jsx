
const StatCard = ({ title, value, graphSrc, iconSrc }) => {
  return (
    <div className="flex flex-row justify-between items-start bg-[#131E2E] p-6 h-40 w-[353.33px] rounded-xl gap-4 text-white">
      <div className="flex flex-col gap-y-2 h-full w-full justify-between">
        <span>{title}</span>
        <div className="flex flex-col gap-y-4">
          <div className="font-semibold font-onset text-2xl">
            <h1>{value}</h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={graphSrc} alt="graph" className="w-12 h-4" />
            <span className="text-[#CCCCCC] text-xs font-normal">vs last year</span>
          </div>
        </div>
      </div>
      <img src={iconSrc} alt="icon" className="w-8 h-8 mt-1 ml-auto" />
    </div>
  );
};
export default StatCard;