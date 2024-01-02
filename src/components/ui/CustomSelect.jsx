export const CustomSelect = ({ onChangeCategories, index, categories }) => {
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={onChangeCategories}
    >
      {categories.map((item) => (
        <option defaultValue={true} key={index} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
