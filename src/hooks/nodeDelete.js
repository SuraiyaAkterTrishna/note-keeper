// delete data


const nodeDelete = (id) => {
    const url = `http://localhost:5000/notes/${id}`;
fetch(url, {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(id);
  });
    return;
};

export default nodeDelete;