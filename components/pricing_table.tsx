export default function PricingTable() {
  const pricingData = [
    {
      name: "Diagnostic",
      emoji: null,
      color: "text-white",
      pricing: [
        { original: null, discounted: 100, hourly: null }
      ]
    },
    {
      name: "Rotation",
      emoji: null,
      color: "text-orange-400",
      pricing: [
        { original: 500, discounted: 440, hourly: "55" },
        { original: 900, discounted: 850, hourly: "53.10" },
        { original: 1300, discounted: 1280, hourly: "50.80" },
        { original: 1600, discounted: 1500, hourly: "46.80" }
      ]
    },
    {
      name: "Regimen",
      emoji: "🔥",
      color: "text-green-400",
      pricing: [
        { original: 1200, discounted: 1100, hourly: "45.80" },
        { original: 2300, discounted: 2100, hourly: "43.70" },
        { original: 3300, discounted: 3000, hourly: "41.60" },
        { original: 4200, discounted: 3800, hourly: "39.60" }
      ]
    }
  ];

  const subjects = ["1 Subject", "2 Subjects", "3 Subjects", "4 Subjects"];

  return (
    <div className="flex items-center justify-center">
      <div className="bg-base-100 rounded-2xl shadow-xl p-8 max-w-6xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">
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
                    <div className="flex items-center gap-2">
                      {classType.name}
                      {classType.emoji && <span className="text-lg">{classType.emoji}</span>}
                    </div>
                  </td>
                  {classType.name === "Diagnostic" ? (
                    <td colSpan={4} className="py-6 px-6 text-center">
                      <span className={`text-2xl ${classType.color}`}>
                        ${classType.pricing[0].discounted}
                      </span>
                    </td>
                  ) : (
                    classType.pricing.map((price, i) => (
                      <td key={i} className="py-6 px-6 text-center">
                        <div className="flex flex-col items-center">
                          <div className="space-x-2">
                            <span className="line-through">${price.original}</span>
                            <span className={`text-2xl font-bold ${classType.color}`}>
                              ${price.discounted}
                            </span>
                          </div>
                          <span className="text-sm mt-1">(${price.hourly}/h)</span>
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