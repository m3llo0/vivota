import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Tenor Ong",
        subjects: "Physics & General Paper (Dual Lead CE)",
        highlights: [
            "OCBC Scholarship (Medicine)",
            "Offered Direct Bachelor + Masters Programme with full scholarship",
            "90RP AAAA/AA score, PCME for GCE A Levels",
            "H3 Physics, Eunoia Junior College",
            "Dean’s List, Eunoia Junior College",
            "Integrated Programme (IP), Catholic High School"
        ],
        bio: `I’ve always enjoyed that moment when something complex finally makes sense,
         when all the ideas connect clearly. That’s what sparked my passion for teaching. 
         I love to break down challenging concepts and explain them in a way that feels intuitive and easy to grasp, 
         helping students to see that it’s really not rocket science!`,

        at_vivota: `At Vivota, I aim to recreate that feeling for every student: making learning feel intuitive rather than intimidating. 
        For me, teaching isn’t just about covering content, it’s about building up my students' confidence, reduce their stress
        and make their lives more positive as a whole. `,

        img: "tenor.png"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}