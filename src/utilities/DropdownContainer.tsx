import {useRouter, useSearchParams } from "next/navigation";

const DropdownContainer = ({ contents, category }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className=" bg-white rounded-md mt-6 z-40 absolute outline-none font-medium min-w-40 text-sm">
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
          <div className="gap-y-1 text-txtcard hover:bg-blue">
            <span className="cursor-pointer px-4  h-4 hover:bg-blue">{content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownContainer;
