import React from "react";
import ReactDOM from "react-dom";
import Datarender from "./components/image";

const Macs = [
  {
    id: 1,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290",
    title: "M3 MAX",
    description: "14-core CPU 30-core GPU 36GB Unified Memory 1TB SSD Storage",
  },
  {
    id: 2,
    image:
      "https://www.apple.com/v/mac/home/bw/images/overview/select/product_tile_mba_13__ci4jh6tvqvyq_large_2x.png",
    title: "M1 Air",
    description:
      "8-core CPU with 4 performance cores and 4 efficiency cores 7-core GPU 16-core Neural Engine",
  },
  {
    id: 3,
    image:
      "https://www.apple.com/v/mac/home/bw/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large_2x.png",
    title: "M2 Air",
    description: `Up to 18 hours Apple TV app movie playback
                Up to 15 hours wireless web
                52.6-watt-hour lithium-polymer battery
                30W USB-C Power Adapter (included with M2 with 8-core GPU)
                35W Dual USB-C Port Power Adapter (included with M2 with 10-core GPU and 512GB storage, configurable with M2 with 8-core GPU)
                USB-C to MagSafe 3 Cable
                Fast-charge capable with 67W USB-C Power Adapter`,
  },
];

const Root = () => {
  return (
    <>
      {Macs.map((mac) => {
        return <Datarender key={mac.id} {...mac}></Datarender>;
      })}
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
