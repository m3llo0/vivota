export default function PricingTable() {
  const pricingData = [
    {
      name: "Diagnostic",
      emoji: null,
      color: "text-white",
      pricing: [
        { original: null, discounted: "Free of Charge"}
      ],
      description: "1 trial lesson x 2h"
    },
    {
      name: "Standard",
      emoji: null,
      color: "text-orange-400",
      pricing: [
        { original: "$375", discounted: "$187.50"},
        { original: "$700", discounted: "$350"},
        { original: "$1000", discounted: "$500"},
        { original: "$1300", discounted: "$650"}
      ],
      description: "4 lessons x 2h",
      promo:"Grand Opening Promo 50% off"
    },
  ];

  const subjects = ["1 Subject", "2 Subjects", "3 Subjects", "4 Subjects"];

  return (
    <div className="flex items-center justify-center">
      <div className="bg-neutral-800 rounded-2xl shadow-xl p-8 max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Vivota Class Pricing
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-4 px-6 text-left font-semibold">
                  No. of Subjects
                </th>
                {subjects.map((subject) => (
                  <th key={subject} className="py-4 px-6 text-center font-semibold">
                    {subject}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData.map((classType, idx) => (
                <tr
                  key={classType.name}
                  className={`${idx < pricingData.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <td className="py-6 px-6 font-medium">
                    <div className="flex flex-col items-center gap-2">
                      <div>
                        <p className="inline text-lg md:text-xl xl:text-2xl font-bold">{classType.name}</p>
                        {classType.emoji && <span className="text-lg ml-1">{classType.emoji}</span>}
                      </div>
                      <p className="">{classType.description}</p>
                        {classType.promo && <span className="text-yellow-500">{classType.promo}</span>}
                    </div>
                  </td>
                  {classType.name === "Diagnostic" ? (
                    <td colSpan={4} className="py-6 px-6 text-center">
                      <span className={`text-2xl ${classType.color}`}>
                        {classType.pricing[0].discounted}
                      </span>
                    </td>
                  ) : (
                    classType.pricing.map((price, i) => (
                      <td key={i} className="py-6 px-6 text-center">
                        <div className="flex flex-col items-center">
                          <div className="space-x-2">
                            <span className="line-through">{price.original}</span>
                            <span className={`text-2xl font-bold ${classType.color}`}>
                              {price.discounted}
                            </span>
                          </div>
                        </div>
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          <p>All prices shown reflect current promotional rates</p>
        </div>
      </div>
    </div>
  );
}