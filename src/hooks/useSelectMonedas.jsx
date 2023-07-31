import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  /* text-align: center; */
`;

const Select = styled.select`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  font-size: 18px;
`;

const useSelectMonedas = (label, options) => {
  const [state, setState] = useState("");

  const SeleccionaMoneda = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccionar</option>

        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SeleccionaMoneda];
};

export default useSelectMonedas;
