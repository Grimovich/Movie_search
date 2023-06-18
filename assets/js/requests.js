async function postData(url, data) {
 const response = await fetch(url, {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(data)
 });

 if (!response.ok) throw Error(response.status)

 return response.json();
}
postData('https://jsonplaceholder.typicode.com/posts',
{
  title: 'Hello, Nikita'
}
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));