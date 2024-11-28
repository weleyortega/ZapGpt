const ShinyButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="relative py-4 px-5 rounded-lg font-bold text-sm bg-gradient-to-b from-[#22b19e] to-[#60b19f]">
      <div className="absolute inset-0">
        <div className="rounded-lg border border-green/300 absolute inset-0 [mask-image:linear-gradient(to_bottom,green)]" />
        <div className="rounded-lg absolute inset-0 border border-black/40 [mask-image:linear-gradient(to_top,green,)]" />
        <div className="absolute inset-0 shadow-[(34, 79, 23)_inset] rounded-lg" />
      </div>
      <span>{children}</span>
    </button>
  );
};

export default ShinyButton;
