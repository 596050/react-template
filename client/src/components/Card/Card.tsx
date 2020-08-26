import React, { ReactNode } from "react";
import classNames from "classnames";

import { StyledCard } from "./Card.styles";

type Props = {
  children: ReactNode;
  id?: string;
  border?: boolean;
  shadow?: boolean;
  mobile?: boolean;
  padding?: string;
  fullHeight?: boolean;
  style?: React.CSSProperties;
};

const Card = ({
  id,
  border = true,
  shadow = true,
  fullHeight = false,
  padding,
  children,
  style,
}: Props) => {
  const className = classNames({ border, shadow, fullHeight });
  return (
    <StyledCard
      id={id}
      data-test-id={id}
      className={className}
      padding={padding}
      style={style}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
