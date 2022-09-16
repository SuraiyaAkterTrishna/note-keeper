const archiveDelete = (id) => {
    const url = `http://localhost:5000/archives/${id}`;
fetch(url, {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
    return;
};

export default archiveDelete;