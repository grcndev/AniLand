
const DropdownContainer = ({ contents, category, setChosenFilter, chosenFilter}) => {
  return (
    <div className="flex flex-col mt-4">
      {contents.map((content, index) => (
        <div key={index} onClick={() => {
          const query = {
            ...chosenFilter,
            [category]: content.toLowerCase(),
          }

          setChosenFilter(query)
            


        }}> {content} </div>
      ))}
    </div>
  );
};

export default DropdownContainer;

// FiltersContainer
// a principio, criaria 2 FilterInputs, um com dropdown e o outro com o search
// entao ele renderiza 4 do tipo dropdown e 1 do tipo search
// qnd cada um tiver funcionando em isolamento perfeitamente
// aih vc pode pensar numa forma de generalizar eles num unico componente
// 5 filtersInput unificados
//

//   if (searchWordEntered) {
//     filtersUrl += `filter[text]=${searchWordEntered}`;
//   }
//   if (chosenYear) {
//     filtersUrl += `&filter[year]=${chosenYear}`;
//   }
//   if (chosenStatus) {
//     filtersUrl += `&filter[status]=${chosenStatus}`;
//   }
//   if (chosenFormat) {
//     filtersUrl += `&filter[subtype]=${chosenFormat}`;
