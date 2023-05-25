const profileData = [
    {
        image: 'https://media.licdn.com/dms/image/C4E03AQF86UwKNzmv5Q/profile-displayphoto-shrink_800_800/0/1643381331322?e=1689811200&v=beta&t=HxuwgtIVXK71vW1Ppx9S94Mrp2EIGUoa3WJisFllumg',
        name: 'Nafis Khan',
        location: 'Bronx, New York',
        occupation: 'Software Engineer Intern at GoDaddy',
        university: 'The City College of New York',
        description:
            'A full-stack and Android Developer proficient in React, Javascript, Python, and Java. I have experience building Web Applications using React, Node, and other JavaScript Frameworks along with building Android Applications using both Java and Kotlin.',
    },
    {
        image: 'https://media.licdn.com/dms/image/C5603AQET_kevL4OsRQ/profile-displayphoto-shrink_800_800/0/1652877453386?e=1689811200&v=beta&t=l7wuP1VJ3DHDP0T5eiUg2g0Q96emzKFqq5e79frOpZM',
        name: 'Abdul Andha',
        location: 'Brooklyn, New York',
        occupation: 'Software Engineer Intern at Freenome',
        university: 'The City College of New York',
        description:
            'Proficient Full Stack and iOS developer. Languages include JavaScript, Python, Swift, Java, and C++. Dedicated to expanding my knowledge and skills in software development and look forward to contributing to impactful projects during my internship.',
    },
    {
        image: 'https://media.licdn.com/dms/image/D4E03AQFkaAqwCQRIQg/profile-displayphoto-shrink_800_800/0/1671340811714?e=1689811200&v=beta&t=ORLQ9XuPLOodtjntQ-kJ7upy028Enf5mnW-fxFKb1gQ',
        name: 'Angel Avila',
        location: 'Bronx, New York',
        occupation: 'Google GSWEP Intern',
        university: 'The City College of New York',
        description:
            "Experienced Web Developer, HackNYU Winner '23, and mentored by Google SWE and Bloomberg SWE. Participation in fellowships and professional organizations such as Headstarter, CodePath, Color Stack, BASTA, LAESA-SHPE, NSBE, ACM, and PHI THETA KAPPA Honor Society.",
    },
]

export default function ProfileCard() {
    return (
        <div className='flex justify-center px-4'>
            {profileData.map((profile, index) => (
                <div
                    key={index}
                    className='flex flex-col items-center justify-center w-full max-w-sm p-8 mx-2 my-5 bg-white rounded-lg shadow-lg'
                >
                    <img
                        src={profile.image}
                        className='w-32 h-32 rounded-full'
                        alt='Profile'
                    />
                    <div className='flex flex-col items-center justify-center mt-5'>
                        <h2 className='text-xl font-bold text-gray-800'>
                            {profile.name}
                        </h2>
                        <h3 className='mb-4 text-sm font-medium text-gray-500'>
                            {profile.location}
                        </h3>
                        <h3 className='text-sm font-bold text-gray-500 font'>
                            {profile.occupation}
                        </h3>
                        <h3 className='mb-4 text-sm font-medium text-gray-500'>
                            {profile.university}
                        </h3>
                        <p className='mt-2 text-gray-600'>
                            {profile.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
