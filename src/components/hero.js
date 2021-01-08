import { useEffect, useState } from "react";
import { Image as ChakraImage } from "@chakra-ui/react";

function Hero() {
  const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
    const [src, setSrc] = useState(lowQualitySrc);

    useEffect(() => {
      setSrc(lowQualitySrc);

      const img = new Image();
      img.src = highQualitySrc;

      img.onload = () => {
        setSrc(highQualitySrc);
      };
    }, [lowQualitySrc, highQualitySrc]);

    return [src, { blur: src === lowQualitySrc }];
  };

  const [src, { blur }] = useProgressiveImg("./hero-tiny.jpg", "./hero.jpg");

  return (
    <ChakraImage
      alt="Rick and Morty"
      src={src}
      filter={blur ? "blur(20px)" : "none"}
      transition={blur ? "none" : "filter 0.3s ease-out"}
      width="full"
      height="55vh"
      objectFit="cover"
      objectPosition="top"
      position="relative"
      zIndex="-1"
      backgroundColor="blue"
    />
  );
}

export default Hero;
