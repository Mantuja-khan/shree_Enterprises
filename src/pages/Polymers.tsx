import React from "react";
import { Helmet } from "react-helmet-async";
import pp_1 from "../assets/pp01_new.webp"
import pp_2 from "../assets/pp02_new.webp"
import pp_3 from "../assets/pp03_new.webp"
import hp_1 from "../assets/hp01_new.webp"
import hp_2 from "../assets/hp02_new.webp"
import hp_3 from "../assets/hp03_new.webp"
import ip_1 from "../assets/ip01_new.webp"
import ip_2 from "../assets/ip02_new.webp"
import ip_3 from "../assets/ip03_new.webp"
import rp_1 from "../assets/rp01_new.webp"
import rp_2 from "../assets/rp02_new.webp"
import rp_3 from "../assets/rp03_new.webp"
import lft_new from "../assets/LFT_new.webp"



const Polymers: React.FC = () => {
  const polymers = [
    {
      name: "PP Compound",
      content:
        "PP Compounds are made by adding other chemicals such as inorganic fillers (like talc, mica, and glass fiber) and rubber, as well as functional additives such as flame retardants and nucleating agents, to homo, random and impact polymers. Through this, PP Compounds have greatly enhanced properties over ordinary polypropylene. There are many grades according to purposes and properties such as rigidity, conductivity, thermal resistance, glossiness, softness, paintability, and flame retardation. They are widely used in making interior and exterior materials for automotive, electric appliances' parts, and the like.",
      images: [
        pp_1,
        pp_2,
        pp_3,
      ],
    },
    {
      name: "Homo Polymer",
      content:
        "Homo polypropylene is a resin polymerized by only propylene monomers and has a fine stereoregularity, featuring a high crystallinity. It thus shows excellent rigidity and thermal resistance. Its main uses are film, yarn, and many commodity applications.",
      images: [
        hp_1,
        hp_2,
        hp_3,
      ],
    },
    {
      name: "Impact Polymer",
      content:
        "Impact polypropylene is a co-polymer of propylene and ethylene (It is polymerized differently from Random polypropylene). Impact polypropylene has not much smaller rigidity compared to the homopolymer and greatly improved impact resistance. It is used mainly in making impact-resistant materials for automotive and electronic appliances, industrial vessels, etc",
      images: [
        ip_1,
        ip_2,
        ip_3,
      ],
    },
    {
      name: "Random Polymer",
      content:
        "Random polypropylene is a co-polymer made by adding a small amount of ethylene in polymerizing polypropylene, which lowers molecular stereoregularity. Compared to homo polypropylene, it has structurally more atypical parts in molecular chains, so it has a little weaker rigidity. However, it has a better impact on strength and flexibility. Also, it has excellent transparency with little light scattering, compared to homo and impact polypropylene. Random polypropylene is used mainly in making transparent airtight vessels and transparent bottles, energy absorbers for autos(foam) as well as impact-resistant packaging materials",
      images: [
        rp_1,
        rp_2,
        rp_3,
      ],
    },
  ];

  const finalItem = {
    name: "LFT (Long Fiber Reinforced Thermoplastics)",
    content:
      "LFT (long fiber reinforced thermoplastics) is a polymer composite material that is being highlighted as a metal substitute. GS Caltex manufactures twisted LFT products. Twisted LFT production technology maximizes resin impregnation into the fiber filament. This has the effect of enhancing thermal and mechanical properties. Almost all kinds of fibers can be used to produce twisted LTF. This enables the supply of products with more diverse properties to a wider range of customers",
    image: lft_new,
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Polymers | Shree Enterprises</title>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Polymers</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Explore our range of high-quality polymers designed to enhance the
          performance of automotive, industrial, and specialty lubricants.
        </p>
      </div>

      {/* Polymer Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {polymers.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-4">{item.name}</h2>
            <p className="text-gray-600 mb-6">{item.content}</p>

            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${item.name} ${i + 1}`}
                  className="w-full h-56 object-cover rounded-lg shadow-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Final Item */}
      <div className="bg-gray-50 py-16 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={finalItem.image}
              alt={finalItem.name}
              className="w-full rounded-xl shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{finalItem.name}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {finalItem.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Polymers;
