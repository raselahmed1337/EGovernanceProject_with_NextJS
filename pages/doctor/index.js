import MyLayout from "./component/layout";

export default function Home() {
  return (
    <>
      <MyLayout title="Home" />
      

      <div className="text-center text-bold bg-gray-200 py-20">
        <div className="container mx-auto px-8 lg:px-52 flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl text-black font-bold mb-2 animate-pulse">
              ...
            </h1>
            <img
              src="/doctorhome.gif"
              alt="My GIF"
              width={600}
              height={600}
            />
            <h1 className="text-3xl text-black font-bold mb-4 animate-pulse">
              ...
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
