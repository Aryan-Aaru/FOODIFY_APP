

const FeatureCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition">
      <Icon size={36} className="mx-auto mb-4 text-[#ef4444]" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};

export default FeatureCard;

