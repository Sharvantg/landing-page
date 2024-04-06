import Link from "../../../node_modules/next/link";

interface productProps {
  data: { id: number; name: string; desc: string; price: number };
}

const ProductCard: React.FC<productProps> = ({ data }) => {
  return (
    <div className="flex flex-col flex-shrink items-start p-4 gap-y-5 justify-start border-2 rounded-md ">
      <h3>{data.name}</h3>
      <p> {data.desc}</p>
      <p>{data.price}</p>
      <Link
        href={{
          pathname: "/product",
          query: { id: data.id },
        }}
      >
        <button className="rounded-full bg-slate-400 p-2 text-white">
          Add to cart
        </button>
      </Link>
      <Link
        href={{
          pathname: "/product",
          query: { id: data.id },
        }}
      >
        <button className="rounded-full bg-slate-400 p-2 text-white">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
