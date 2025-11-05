import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Jaryl Lee",
        subjects: "Math (Lead CE) & Physics",
        highlights: [
            "NTU Lee Kong Chian School of Medicine",
            "OCBC Scholarship (Medicine)",
            "Offered Direct Bachelor + Masters Programme by NTU with full scholarship",
            "90RP AAAA/AA score, PCME for GCE A Levels",
            "H3 Physics, Eunoia Junior College",
            "Dean’s List, Eunoia Junior College",
            "Integrated Programme (IP), Catholic High School"
        ],
        bio: `I’ve always enjoyed that moment when something complex finally makes sense,
         when all the ideas connect clearly. That’s what sparked my passion for teaching. 
         I love to break down challenging concepts and explain them in a way that feels intuitive and easy to grasp, 
         helping students to see that once it clicks, it’s really not that hard at all!
`,
        at_vivota: `???????????????????????????????????????????????????????????????????????????????????????????????????`,
        img: "/test.jpg"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}