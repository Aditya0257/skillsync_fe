import { useNavigate } from  'react-router-dom';


export const LeftSideDrawers = () => {

  const navigate = useNavigate();



  return (
    <div className="w-12 bg-[#181717] flex flex-col items-center py-8 fixed h-full">
      <div className="space-y-8 flex-grow pl-2">
        <button
          className="text-2xl"
          onClick={function () {
            navigate("/dashboard");
          }}
        >
          🏠
        </button>
        <button className="text-2xl">📩</button>
        <button className="text-2xl">📋</button>
        <button
            className="text-2xl"
            onClick={function () {
              navigate("/profile");
            }}
          >
            👤
          </button>
      </div>
      <button className="text-2xl mb-0">⚙️</button>
    </div>
  );
};
