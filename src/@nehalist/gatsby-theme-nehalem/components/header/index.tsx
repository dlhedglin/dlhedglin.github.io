import React, { FunctionComponent } from "react";
import StyledNavigation from "@nehalist/gatsby-theme-nehalem/src/components/navigation";
import {
  Description,
  StyledHeader,
  StyledTopics,
  Title,
  TitleWrapper,
} from "./style";
import reactStringReplace from "react-string-replace";
import { MenuItem } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import Particles from "react-particles-js";

interface HeaderProps {
  title: string;
  description: string;
  topics: string[];
  menu: MenuItem[];
  search: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({
  title,
  description,
  menu,
  topics = [],
  search = true,
}) => {
  if (topics.length > 0) {
    description = reactStringReplace(description, "%TOPICS%", (match, i) => {
      return (
        <StyledTopics
          strings={topics}
          typeSpeed={50}
          backSpeed={60}
          shuffle={true}
          backDelay={1500}
          loop={true}
          key={match + i}
        />
      );
    }) as any;
  }

  return (
    <StyledHeader style={{zIndex:-10}}>
      <Particles
        style={{ maxHeight: "50vh", position:"absolute", left: 0, top: 0, zIndex:0}}
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#bd93f9",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 11.83721462448409,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#f8f8f2",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5782952832645452,
              direction: "left",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: false,
        }}
      />
      <StyledNavigation title={title} menu={menu} showSearch={search} />
      <TitleWrapper>
        <Title style={{zIndex:1}}>{title}</Title>
        <Description style={{zIndex:1}}>{description}</Description>
      </TitleWrapper>
      
      
    </StyledHeader>
  );
};

export default Header;
