import {useRouter, useSearchParams } from "next/navigation";

const DropdownContainer = ({ contents, category }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="line-clamp-2 overflow-y-hidden bg-white rounded-md mt-2 z-40 absolute outline-none font-medium w-48 text-sm">
      {contents.map((content, index) => (
        <div className=""
          key={index}
          onClick={() => {
            const searchedContent =
              typeof content === "number" ? content : content.toLowerCase();
            const params = new URLSearchParams(searchParams.toString());
            params.set(category, searchedContent);
            const queryParam = params.get(category);
            router.push(`/search/anime?${category}=${queryParam}`); // vamos precisar somar os URLs anteriores, dos outros dropdowns e do search
          }}
        >
          {" "}
          <div className="flex gap-y-4 cursor-pointer text-txtcard hover:text-txtcard hover:bg-blue">
            <span className="flex cursor-pointer mt-4 mx-4 hover:bg-txnav text-txtcard h-4 gap-y-2 hover:txt-blue">{content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownContainer;
