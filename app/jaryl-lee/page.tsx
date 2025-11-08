import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Jaryl Lee",
        subjects: "Math (Lead CE) & Physics",
        highlights: [
            "NTU Lee Kong Chian School of Medicine",
            "90RP AAAA/AA score, PCME for GCE A Levels",
            "H3 Math & Raffles Academy (Mathematics)",
            "Raffles All-Round Excellence Award",
            "Gifted Education Programme (GEP)"
        ],
        bio: `Hey everyone, I’m Jaryl! Like you, I grew up in Singapore’s educational system, scored 90 RP at A-Levels, and now study Medicine at NTU LKC. 
        However, I was also in your position once, and I know what it feels like to be stuck, anxious, and pressed for time... but don't fret!
        I'm here to help make the best of your current situation and strive to improve not just your academics but your well-being too. `,

        at_vivota: `At Vivota, there are no magic formulas or shortcuts to overhaul your grades overnight. However, with my
        consistent guidance backed by a robust system, I'm fully confident that you too can shine bright and overcome any
        difficulties that previously plagued you!`,
        img: "/test.jpg"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}