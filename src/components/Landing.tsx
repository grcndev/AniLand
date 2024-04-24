import SectionLanding from "@/utilities/SectionLanding";
import discover from "../assets/apps.svg";
import custom from "../assets/custom.svg";
import social from "../assets/social.svg";
import stats from "../assets/stats.svg";

const Landing = () => {
  return (
    <>
    <div className="flex flex-col bg-bglanding  rounded-2xl w-auto mt-12 mx-80">
      <div className="flex flex-col items-center gap-4 mt-16 font-bold">
        <h1 className="text-mjtitleldg text-3xl mb-4">
          The next-generation anime platform
        </h1>
        <h4 className="text-spanldg justify-center text-center text-xl max-w-sm font-light mb-20">
          Track, share, and discover your favorite anime and manga with Anilist
        </h4>
      </div>
      <div className="grid gap-x-2 gap-y-12 grid-cols-2 justify-between items-center py-18 px-30 mx-36 mb-36">
        <SectionLanding
          svg={stats}
          sectionTitle={"Discover your obcessions"}
          sectionText={
            "What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics"
          }
        />
        <SectionLanding
          svg={discover}
          sectionTitle={"Bring Anilist anywhere"}
          sectionText={
            "keep track your progress on-the-go with one of many Anilist apps across iOS, Android, macOS, and Windows."
          }
        />
        <SectionLanding
          svg={social}
          sectionTitle={"Join the conversation"}
          sectionText={
            "Shake your thoughts with our thriving community, make friends, socialize, and receive recommendations."
          }
        />
        <SectionLanding
          svg={custom}
          sectionTitle={"Tweak it your liking"}
          sectionText={
            "Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode."
          }
        />
      </div>
    </div>
    <div className="flex justify-center -mt-6 ml-96 font-semibold mb-36 lg:px4 rounded-3xl w-48 bg-sectionbtn text-sectionbtncl py-2 px-3">
        Join Now
        <div className="flex bg-sectioncircle py-2 px-2rounded-full">
          <svg
            className="flex bg-red"
            data-v-3428d21c=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
//            class="svg-inline--fa fa-chevron-right fa-w-10"
          >
            <path
              data-v-3428d21c=""
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              class=""
            ></path>

          </svg>
        </div>
      </div>
    </>
  );
};

export default Landing;
