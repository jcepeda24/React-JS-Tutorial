import { useState } from "react";
import Button from "../components/Button";
import StoreItem from "../components/StoreItem";

export default function Page3() {
  const [showItem, setShowItem] = useState(false);

  function HandleShow({ show }) {
    if (show) {
      return <StoreItem item={item1} />;
    }

    show && <StoreItem item={item1} />;
  }

  const item1 = { title: "Bat", desc: "Metal bat for baseball", price: "50" };

  return (
    <>
      <Button show={showItem} setShow={setShowItem} color={"yellow"} />
      <HandleShow show={showItem} />
    </>
  );
}
