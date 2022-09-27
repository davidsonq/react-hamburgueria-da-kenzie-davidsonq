export const InputSeach = ({ backList }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        id="Seach"
        onChange={backList}
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <label htmlFor="Seach"></label>
    </form>
  );
};
