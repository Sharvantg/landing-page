import ProductCard from "./ProductCard";
import { ListOfProducts } from "../(helpers)/ListOfProducts";

export default function ProductsList() {
  return (
    <div className="p-5 grid grid-flow-col gap-x-5 gap-y-2 ">
      {ListOfProducts.map((currentElem) => {
        // console.log(currentElem);
        return (
          <ProductCard data={currentElem} key={currentElem.id}></ProductCard>
        );
      })}
    </div>
  );
}
