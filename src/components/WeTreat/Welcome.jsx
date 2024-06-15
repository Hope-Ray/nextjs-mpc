
const Welcome = () => {
  return (
    <div className="Aboutwelcomebg h-[100vh]">
      <div className="max-w-7xl w-full mx-auto relative h-full">
        <div className="md:hidden absolute top-[85%] left-0 right-0 mx-auto z-30 bg-brandColor px-2 py-1 w-full max-w-xs">
          <div className="flex justify-center items-stretch gap-3 h-full py-2">
            <span className="flex-shrink-0">
              <img src="/images/logo-mpc.png" className="h-[3rem] w-auto" alt="Logo" />
            </span>
            <div className="text-white text-[1.5rem] opacity-80 flex-grow flex items-center">
              Global BodyFix
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome