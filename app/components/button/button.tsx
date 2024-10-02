"use client";

import { useGlobalState } from "@/app/context/global-provider";
import React from "react";
import styled from "styled-components";

interface Props {
  icon?: React.ReactNode;
  name?: string;
  background?: string;
  padding?: string;
  borderRad?: string;
  fw?: string;
  fs?: string;
  click?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  blog?: string;
  border?: string;
}

export const Button: React.FC<Props> = ({
  icon,
  name,
  background,
  padding,
  borderRad,
  fw,
  fs,
  click,
  type,
  blog,
  border,
}) => {
  const { theme } = useGlobalState();
  return (
    <ButtonStyled
      theme={theme}
      style={{
        background: background,
        padding: padding || "0.5rem 1rem",
        borderRadius: borderRad || "0.5rem",
        fontWeight: fw || "500",
        fontSize: fs,
        border: border,
      }}
      type={type}
      onClick={click}
    >
      {icon && icon}
      {name}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colorGrey2};
  z-index: 5;
  cursor: pointer;

  transition: all 0.55s ease;

  i {
    margin-right: 1rem;
    color: ${(props) => props.theme.colorGrey2};
    font-size: 1.5;
    transition: all 0.55s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colorGrey0};

    i {
      color: ${(props) => props.theme.colorGrey0};
    }
  }
`;
