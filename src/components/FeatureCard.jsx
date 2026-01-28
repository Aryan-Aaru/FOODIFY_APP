const FeatureCard = ({ title, desc }) => {
  return (
    <div className="bg-white hover:bg-[#fdecec] rounded-xl shadow-lg p-6 text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-[#ef4444] mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default FeatureCard;
