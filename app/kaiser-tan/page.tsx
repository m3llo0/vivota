import TutorDetails from "@/components/tutor_details"

export default function TutorProfile() {

    const tutor = {
        name: "Kaiser Tan",
        subjects: "Biology (Lead CE) & Chemistry",
        highlights: [
            "NTU Lee Kong Chian School of Medicine",
            "SAF Young Leaders Award",
            "Straight As for Bio, Chem and Math",
            "Dean’s List, Eunoia Junior College",
            "Integrated Programme (IP), Catholic High School"
        ],
        bio: `Hi, my name is Kaiser, and I am currently a medical student studying in Singapore. 
        My journey as a tutor began from a deep love for education, especially working with children who learn differently. 
        I started out tutoring disadvantaged and special needs students, where I discovered the importance of patience, clear explanation, 
        and finding innovative ways to make learning meaningful. Through the years, I’ve developed a personalised and adaptive teaching approach 
        that focuses on identifying how each student learns best, and guiding them step-by-step toward confidence and mastery.` ,

        at_vivota: `At Vivota, I believe that Biology becomes clearer, easier, and more intuitive when students can see the bigger picture 
        and the underlying logic behind systems. My goal is not only to help students improve their grades, but also to nurture curiosity, 
        resilience, and an appreciation for how the living world functions. I believe every student is capable of excellence, 
        and look forward to bringing out the best in your child!`,
        
        img: "/test.jpg"
    }

    return (
        <TutorDetails
            tutor={tutor}
        />
    )
}