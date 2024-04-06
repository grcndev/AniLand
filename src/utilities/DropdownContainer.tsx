import { useRouter, useSearchParams } from "next/navigation";

const DropdownContainer = ({ contents, category,}) => {
  const searchParams = useSearchParams()
  const router = useRouter()

  return (
    <div className="flex flex-col mt-4">
      {contents.map((content, index) => (
        <div key={index} onClick={() => {
          const searchedContent = typeof content === 'number' ? content : content.toLowerCase()

          const params = new URLSearchParams(searchParams.toString())
                params.set(category, searchedContent)
                const queryParam = params.get(category)
                router.push(`/search/anime?${category}=${queryParam}`) // vamos precisar somar os URLs anteriores, dos outros dropdowns e do search
        }}> {content} </div>
      ))}
    </div>
  );
};

export default DropdownContainer;
