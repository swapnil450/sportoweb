import React from "react";
import { SelectPicker } from "rsuite";

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface selectPickerProps {
  placement: any;
  size?: Size;
}
type sizes = string;

const CustomSelectPicker: React.FC<selectPickerProps> = ({ placement }) => (
  <SelectPicker placeholder="categories" data={data} placement={placement} />
);

export default function SelectCategori() {
  return (
    <div>
      <CustomSelectPicker size="xs" placement="autoVerticalStart" />{" "}
    </div>
  );
}
