type PassedTypes = {
  type?: string;
};

export const Header = ({ type }: PassedTypes) => {
  const chooseHeader = () => {
    return type === "zoomer" ? "ZoomerIpsum" : "BoomerIpsum";
  };

  return <h1>{chooseHeader()}</h1>;
};
