import { useRouter, useSearchParams } from "next/navigation";

interface DropdownContainerProps {
  category: string;
  contents: number[] | string[];
  onSelect: () => void;
}

const DropdownContainer = ({ contents, category, onSelect }: DropdownContainerProps) => {

  const searchParams = useSearchParams();
  const router = useRouter();
  return (
    <div className="overflow-hidden overflow-y-auto max-h-96 bg-white rounded-md mt-2 absolute font-medium w-44 text-sm z-40">
      {contents.map((content, index) => (
        <div
          className=""
          key={index}
          onClick={() => {
            const searchedContent =
              typeof content === "number" ? content : content.toLowerCase();
            const params = new URLSearchParams(searchParams.toString());
            params.append(category, searchedContent);
            router.push(`/search/anime?${params.toString()}`);
            onSelect()
          }}
        >
          {" "}
          <div className="px-2 py-2 my-2 mx-1 hover:bg-bgcbody text-txtcard hover:text-blue rounded-sm cursor-pointer">
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownContainer;

