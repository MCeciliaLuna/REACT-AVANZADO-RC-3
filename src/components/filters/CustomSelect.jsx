import { useMemo } from "react";

export const CustomSelect = ({ onChangeCategories, index, categories }) => {
  const getOptions = () => {
    return categories.map((item) => (
      <option defaultValue={true} key={index} value={item.name}>
        {item.name}
      </option>
    ));
  };

  const options = useMemo(() => 
  {
    return getOptions()
  }, [onChangeCategories])

  return (
    <select
      className="form-select w-75"
      aria-label="Default select example"
      onChange={onChangeCategories}
    >
      {options}
    </select>
  );
};
