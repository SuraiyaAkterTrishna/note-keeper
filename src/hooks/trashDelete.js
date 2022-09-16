const trashDelete = (id) => {
    const url = `http://localhost:5000/trash/${id}`;
fetch(url, {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
    return;
};

export default trashDelete;