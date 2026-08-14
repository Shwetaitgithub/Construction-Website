function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className={`text-sm font-black uppercase tracking-[3px] ${
        light ? "text-[#e7b85c]" : "text-[#c96f43]"
      }`}>
        {eyebrow}
      </p>

      <h2 className={`mt-3 text-4xl font-black leading-tight md:text-5xl ${
        light ? "text-white" : "text-[#24211d]"
      }`}>
        {title}
      </h2>

      <p className={`mt-5 max-w-2xl text-lg leading-8 ${
        light ? "text-white/65" : "text-[#69635b]"
      }`}>
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;