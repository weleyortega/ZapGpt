import Image from "next/image";


const Logo = ({ className }: { className?: string }) => {
  return (
    <Image src={"/zap.png"} width={0} height={0} alt="logo" />
  );
};

export default Logo;
