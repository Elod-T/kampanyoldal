import { PRODUCTS } from "../../consts";
import Card from "../checkout/card";

export default function SingleProducts() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {PRODUCTS.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
