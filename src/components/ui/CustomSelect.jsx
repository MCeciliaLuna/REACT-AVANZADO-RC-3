export const CustomSelect = ({index, categories}) => {
  
  return (
    <select className="form-select" aria-label="Default select example">
      {
        categories.map(item => (
          <option defaultValue={true} key={index} value={item.name}>{item.name}</option>

        ))
      }
                </select>
  )
}
