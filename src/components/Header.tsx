type PassedTypes = {
  type?: string;
};

export const Header = ({ type }: PassedTypes) => {
  return <h1>{type}</h1>;
};
