import { useState } from "react";
type MyComponentProps = {
  value: string;
  onSquareClick: () => void;
};
export default function Square({value,onSquareClick}:MyComponentProps) {
    
  return <button onClick={onSquareClick} className="square">{value}</button>;
}