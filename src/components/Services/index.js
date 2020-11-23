import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesWrapper,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../assests/svg-1.svg";
import Icon2 from "../../assests/svg2.svg";
import Icon3 from "../../assests/svg3.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Open Source</ServicesH2>
          <ServicesP>
            Fostering an open-source community to spur the development of a
            robust network of financial products and services to help people
            access and use the AKS payment system.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Scalable</ServicesH2>
          <ServicesP>
            Growing the network by adding more validator nodes and coordinating
            the technical roadmap among the validator nodes.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Secure</ServicesH2>
          <ServicesP>
            Facilitating the provision of services in the AKS payment system in
            a safe and compliant manner.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
