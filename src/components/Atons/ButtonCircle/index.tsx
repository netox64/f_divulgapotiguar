import Image from "next/image";

export const ButtonCircle = () => {
  return (
    <div className={`bg-gray-600 p-4 mx-5 rounded-full`}>
      <Image src="/imgs/logo.png" alt="" width={64} height={64} />
    </div>
  );
};
