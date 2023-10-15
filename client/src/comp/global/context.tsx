import React, { createContext, useState } from "react";

interface Beneficiary {
  name: string;
  id: string;
  address: string;
}
const BeneficiaryContext = createContext([]);

export default function AppContext(props: any) {
  const [listEMployee, setListEmployee] = useState([]);

  return (
    <BeneficiaryContext.Provider value={listEMployee}>
      {props.children}
    </BeneficiaryContext.Provider>
  );
}
