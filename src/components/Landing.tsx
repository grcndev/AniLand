import SectionLanding from '@/utilities/SectionLanding'
import  discover  from '../assets/apps.svg'
import custom from '../assets/custom.svg'
import social from '../assets/social.svg'
import stats from '../assets/stats.svg'

const Landing = () => {
  return (
    <div className='flex flex-col bg-bglanding rounded-2xl w-auto mt-12 mx-80 mb-28 '>
        <div className='flex flex-col items-center gap-4 mt-16 font-bold'>
            <h1 className='text-mjtitleldg text-3xl'>The next-generation anime platform</h1>
            <h4 className='text-spanldg justify-center text-center text-xl max-w-sm font-light'>Track, share, and discover your favorite anime and manga with Anilist</h4>
        </div>
        <div className= 'grid gap-x-20 gap-y-14 grid-cols-2 justify-between items-center py-20 px-30 mx-36 mb-4' >
        <SectionLanding svg={stats} sectionTitle={"Discover your obcessions"} sectionText={"What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics"}/>
        <SectionLanding svg={discover} sectionTitle={"Bring Anilist anywhere"} sectionText={"keep track your progress on-the-go with one of many Anilist apps across iOS, Android, macOS, and Windows."}/>
        <SectionLanding svg={social}sectionTitle={"Join the conversation"} sectionText={"Shake your thoughts with our thriving community, make friends, socialize, and receive recommendations."}/>
        <SectionLanding svg={custom}sectionTitle={"Tweak it your liking"} sectionText={"Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode."}/>
        </div>
    </div>
  )
}

export default Landing;