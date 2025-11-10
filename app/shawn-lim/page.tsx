import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Shawn Lim",
        subjects: "Chemistry (Lead CE) & Biology",
        highlights: [
            "90RP AAAA/AA score, BCMH for GCE A Levels",
            "Offered Double Degree & Scholarship by SMU",
            "Dean’s List, Eunoia Junior College",
            "Integrated Programme (IP), Catholic High School"
        ],
        bio: `Hi! I’m Shawn, a Singaporean medical student and passionate tutor since 2022. 
        I started tutoring to support my medical studies, but quickly realized that teaching is so much more than just grades. 
        I love guiding each student — whether adolescent or young adult — towards discovering their strengths, building confidence,
        and preparing for university and beyond.`,
        at_vivota: `At Vivota, my goal isn’t just academic improvement — it’s helping students find their ikigai and 
        fully appreciate the journey of learning. I'm also excited to share my experiences, especially in medicine and guide them 
        fully in their educational journey even after the A Levels — so reach out to me if 
        you’d like to join me in this once-in-a-lifetime learning experience!`,
        img: "shawn.png"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}