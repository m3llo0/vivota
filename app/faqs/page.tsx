'use client'
import { useState, useEffect } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQs() {

  const [faq, setFaq] = useState<FAQ[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFaq = async () => {
      try {
        const response = await fetch('/data/faqs.json');
        if (!response.ok) {
          throw new Error('Failed to load faqs');
        }
        const data = await response.json();
        setFaq(Array.isArray(data) ? data : []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      }
    };

    loadFaq();
  }, []);

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-32 md:py-36 lg:py-40 xl:py-42 px-8 sm:px-10 md:px-12 lg:px-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">FAQs</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-32 md:py-36 lg:py-40 xl:py-42 px-8 sm:px-10 md:px-12 lg:px-14">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">FAQs</h1>

      <div className="space-y-2">
        {faq.map((item, i) => (
          <div
            key={i}
            className="collapse collapse-plus bg-base-100 border border-yellow-500 bg-neutral-800"
          >
            <input
              type="checkbox"
              name="faq-accordion"
              defaultChecked={i === 0}
            />
            <div className="collapse-title font-semibold text-lg lg:text-xl">{item.question}</div>
            <div className="collapse-content text-base lg:text-lg">{item.answer}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
