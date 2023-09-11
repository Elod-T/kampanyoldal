import { BUNDLES } from "../../consts";
import Card from "../checkout/card";

export default function Bundles() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {BUNDLES.map((bundle) => (
        <Card key={bundle.id} product={bundle} />
      ))}
    </div>
  );
}
