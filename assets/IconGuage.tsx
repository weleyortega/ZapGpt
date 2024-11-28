import { twMerge } from "tailwind-merge";

const IconGuage = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="256"
      width="256"
      viewBox="0 0 256 256"
      focusable="false"
      className={twMerge("h-5 w-5", className)}
    >
      <path
        d="M209.88,69.83A115.19,115.19,0,0,0,128,36h-.41C63.85,36.22,12,88.76,12,153.13V176a20,20,0,0,0,20,20H224a20,20,0,0,0,20-20V152A115.25,115.25,0,0,0,209.88,69.83ZM220,172H127.32l46.44-65A12,12,0,1,0,154.24,93L97.82,172H36V153.13c0-1.72,0-3.43.14-5.13H56a12,12,0,0,0,0-24H40.62c10.91-33.39,40-58.52,75.38-63.21V80a12,12,0,0,0,24,0V60.8A92,92,0,0,1,215.66,124H200a12,12,0,0,0,0,24h19.9c.06,1.33.1,2.66.1,4Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default IconGuage;
