

const Badge = ({ title, age, episodes, format, rating, status }) => {
  
  return (
    <div className="flex flex-col bg-sgtxcol ml-52 mr-8 p-16 rounded -mt-72 w-64 absolute z-30" >
      <div className="flex flex-col bg-sgtxcol rotate-45 h-8 w-8 -top-8 -ml-16 py-2 relative -z-20">
        {" "}
      </div>
      <div className="flex items-center -mt-20 justify-between">
        <h4 className="flex text-left -ml-10 w-32 text-txtfilter text-sm">
          {title}
        </h4>
        <div className="-mr-10 -ml-2">
          <svg
            color="rgb(123,213,85)"
            className="mr-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            role="img"
            class="icon face"
            width="1em"
            viewBox="0 0 496 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
              fill="currentColor"
            ></path>
          </svg>
          <h5 className="flex items-left text-txtfilter mt-1 text-sm ">
            {rating}%
          </h5>
        </div>
      </div>
      <div>
        <span className="flex -ml-10 mb-2  mt-4 text-sm text-badgeage">
          {age}
        </span>
        <span className="flex -ml-10 text-sm mb-4 font-semibold text-txtcard">
          {format} · {"   "} {episodes} Episodes
        </span>
        <span className="flex -ml-10 -mb-6 items-center pl-3 w-16 text-xs text-badgeage rounded-xl bg-badgebg">
          {status}
        </span>
      </div>
    </div>
  );
};

export default Badge;

//----------------------------

/* 
return (
    <div className="">
    <div className="flex flex-col bg-sgtxcol ml-52 p-16 rounded -mt-72 w-64 z-30">
      <div className="flex items-center -mt-8 justify-between gap-1">
        <h4 className="flex text-left -ml-10 w-36 gap-1 text-txtfilter text-sm ">
          {title}
        </h4>
        <div>
        <svg
          color="rgb(123,213,85)"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          role="img"
          class="icon face"
          width="1em"
          viewBox="0 0 496 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
            fill="currentColor"
          ></path>
        </svg>
        <h5 className="flex items-left text-txtfilter mt-1 text-sm ">
          {rating}%
        </h5>
        </div>
      </div>
      <div className="">
        <span className="flex -ml-10 mb-2  mt-8 text-sm text-badgeage">
          {age}
        </span>

        <span className="flex -ml-10 text-sm mb-4 font-semibold text-txtcard">
          {format} · {" "}  {episodes} Episodes
        </span>

        <span className="-ml-36 px-3 py-0.5 text-xs text-badgeage rounded-xl inline-block bg-badgebg">
          {status}
        </span>
      </div>
    </div>
    </div>
  );

*/

/*
<Link to={`/anime/${id}`} type="button">
          <div className={styles.result}>
            <div className={styles.card_box}>
              <div className={styles.tooltip}>
                <img src={poster} className={styles.image} />
                <section className={styles.tooltip_box}>
                  <div className={styles.tooltip_title}>
                    {title} ({year})
                  </div>
                  <div className={styles.tooltip_score}>{score}%</div>
                  <div className={styles.tooltip_ranking}>
                    <div className={styles.tooltip_rank}>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/32/WikiFont_uniE033_-_heart_-_red.svg"
                        alt=""
                        className={styles.tooltip_img}
                      />
                      #{rank} Most Popular
                    </div>
                    <div className={styles.tooltip_rate}>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Full_Star_Yellow.svg"
                        alt=""
                        className={styles.tooltip_img}
                      />
                      #{rate} Highest rated
                    </div>
                  </div>
                  <div
                    className={styles.tooltip_synopsis}
                  >{`${synopsis.substring(0, 450)}...`}</div>
                </section>
              </div>
            </div>
          </div>
        </Link>

*/
