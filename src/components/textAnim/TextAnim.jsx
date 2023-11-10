import React from "react";
import styled from "styled-components";

// TEXT ANIM
import { useRef, useLayoutEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StyledTextAnim = styled.div`
  /* STYLE DE TEXTE DE L'ANIM */
`;

function TextAnim({ children }) {
  const comp = useRef(); // create a ref for the root level element (we'll use it later)

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        onEnter: () => {
          // ANIMATIONS GSAP HERE DONT FORGET TO TARGET CHILDREN (IF .word)
          gsap.from(comp.current, {
            y: "110%",
            opacity: 0,
            rotationZ: "10",
            duration: 0.6,
            ease: "power1.out",
            stagger: 0.1,
          });
        },
        trigger: comp.current,
        start: "top bottom", // we can use top : 75%
        end: "bottom top",
        scrub: true,
        //
      },
    });

    // -- SPLIT --
    let typeSplit = new SplitType(comp.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    console.log(comp.current.children);
    return () => {
      // cleanup code (optional)
    };
  }, []);
  return <StyledTextAnim ref={comp}>{children}</StyledTextAnim>;
}

export default TextAnim;
