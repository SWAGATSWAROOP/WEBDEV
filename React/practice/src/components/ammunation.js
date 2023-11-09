import React from "react";

const Guns = [
  {
    title: "M16",
    image:
      "https://ssbcrackexams.com/wp-content/uploads/2023/03/M16-USA-1024x576.webp",
    des: "In the late 1950s, this weapon was designed. It was a very progressive design at the time. The US Army requested a superlight weapon. To save weight, the M16 uses a variety of lightweight materials. It replaces steel with aluminum and wood with fiberglass construction. It is also ergonomically designed. It included many never-before-seen features. It was known as the “Space Rifle” when it was first introduced.",
  },
  {
    title: "AK-103",
    image:
      "https://ssbcrackexams.com/wp-content/uploads/2023/03/Ak-103-1024x682.webp",
    des: "The assault rifles in the AK-100 series evolved from the AK-74M, which is widely used by the Russian Army and many other countries around the world. These assault rifles are technically similar to the legendary AK-47, but they have improved manufacturing technologies and are made of new materials.",
  },
  {
    title: "Heckler & Koch G36",
    image:
      "https://ssbcrackexams.com/wp-content/uploads/2023/03/Heckler-Koch-G36.jpg",
    des: "Heckler & Koch designed the G36 assault rifle to replace the G3 assault rifle in service with the Bundeswehr. The G36 has been a standard-issue infantry rifle with the German armed forces since 1995. This weapon was a huge export success. It has been exported to over 40 countries worldwide. This assault rifle is built with cutting-edge technology. This assault rifle is fed by translucent plastic 30-round box-shaped magazines. For quick reloading, two or three magazines can be clipped together. This weapon can also be used with 100-round dual drum magazines. This rifle can accept any standard NATO 5.56 * 45 mm magazine after some adjustments.",
  },
  {
    title: "Heckler & Koch G3",
    image:
      "https://ssbcrackexams.com/wp-content/uploads/2023/03/Heckler-Koch-G3.webp",
    des: "Heckler & Koch developed the G3 assault rifle in the late 1950s. The Bundeswehr adopted it in 1959 and used it until the mid-1990s when it was replaced by the G36 assault rifle. Some G3 variants are still in use by German border guards and police forces. This weapon was widely disseminated. At one point, 75 countries used it as their standard-issue assault rifle. It is still used by more than 60 countries. Variants of this weapon are still manufactured under license in some countries. The Heckler & Koch G3 is designed to fire NATO 7.62 X 51 mm ammunition. It runs on a roller-delayed blowback system.",
  },
  {
    title: "AK-47",
    image:
      "https://ssbcrackexams.com/wp-content/uploads/2023/03/Ak-47-Russia.webp",
    des: "The AK-47, also known as the Kalashnikov, is a gas-operated, 7.62 mm assault rifle designed by Mikhail Kalashnikov in the Soviet Union around WWII. It is the first weapon in the Kalashnikov rifle (or “AK “) series. It was finished in 1947, as indicated by the number 47.",
  },
]; 

const Gunsinfo = (props) =>{
  return (
    <>
      <h4>{props.object.title}</h4>
      <img src={props.object.image} alt="" />
      <br />
      <p>
        {props.object.des}
      </p>
    </>
  )
};

const Gun = () => {
  return(
    <>
    <Gunsinfo object={Guns[0]}></Gunsinfo>
    <Gunsinfo object={Guns[1]}></Gunsinfo>
    <Gunsinfo object={Guns[2]}></Gunsinfo>
    <Gunsinfo object={Guns[3]}></Gunsinfo>
    </>
  );
}

export default Gun;

