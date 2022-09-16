const archiveDelete = (id) => {
    const url = `https://immense-sea-60701.herokuapp.com/archives/${id}`;
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