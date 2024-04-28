

const Badge = ({ title, age, episodes, format, rating, status }) => {
  const flooteredRating = Math.floor(rating)
  return (
    <div className="flex flex-col bg-sgtxcol ml-[220px] p-14 rounded-md mt-6 min-w-72 absolute z-30 shadow-filter" >
      <div className="flex flex-col bg-sgtxcol rotate-45 h-6 w-4 -top-8 -ml-14 py-2 relative -z-20">
        {" "}
      </div>
      <div className="flex -mt-20 items-center justify-between">
        <h4 className="flex items-center -ml-10 mt-4 text-txtfilter text-sm">
          {title}
        </h4>
        <div className="flex items-center gap-1">
          <svg
            color="rgb(123,213,85)"
            className="mt-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            role="img"
          
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
          <h5 className="flex text-txtfilter mt-3 -mr-9 text-md ">
            {flooteredRating}%
          </h5>
        </div>
      </div>
      <div>
        <span className="flex -ml-10  mt-3 text-[12.5px] text-badgeage">
          {age || 'Teens 12 or older'}
        </span>
        <span className="flex -ml-10 text-[13px] mb-4 font-normal text-txtcard">
          {format} {"  "}<span className="ml-1 mr-2 font-bold">·</span> {"   "} {episodes} Episodes
        </span>
        <span className="flex items-center justify-center -ml-10 -mb-9 mr-14 px-1 w-16 text-xs text-badgeage rounded-xl bg-badgebg">
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
