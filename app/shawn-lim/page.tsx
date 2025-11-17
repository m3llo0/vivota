import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Shawn Lim",
        subjects: "Chemistry (Lead CE) & Biology",
        highlights: [
            "Singapore Medical Student",
            "Tutored 50+ students privately since 2022",
            "90RP AAAA/AA score, BCMH for GCE A Levels",
            "Offered Double Degree & Scholarship by SMU",
            "Dean’s List, Eunoia Junior College",
            "Integrated Programme (IP), Catholic High School"
        ],
        bio: `Hi! I’m Shawn, a Singaporean medical student and passionate tutor since 2022. 
        With four years of tutoring experience across chemistry and biology, and having met students from 12 different JCs, I’ve 
        seen almost every learning style and every kind of challenge. I bring that experience into each lesson, helping every student who 
        walks through Vivota’s doors move from confusion to clarity, and from clarity to confidence.`,
        at_vivota: `At Vivota, my aim is never rote memorisation. I guide students to grasp the ideas behind the formulas,
         appreciate the patterns that run through the subject, 
         and build a genuine interest that makes learning feel natural rather than forced. When 
         students enjoy the process, their mastery grows quickly and sustainably. Chemistry becomes intuitive once you truly understand its logic. `,
        img: "shawn.png"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}