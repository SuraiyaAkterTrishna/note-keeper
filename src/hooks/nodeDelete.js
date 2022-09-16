// delete data


const nodeDelete = (id) => {
    const url = `https://immense-sea-60701.herokuapp.com/notes/${id}`;
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