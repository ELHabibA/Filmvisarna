async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// Login
await postData('/api/login', data = {email: "tom@nodehill.com", password: "1234"})


async function deleteFetch(url=""){
  const response = await fetch(url, {method: 'DELETE'});
  return response.json();
}

// Logout
await deleteFetch('/api/login')



async function getFetch(url=""){
  const response = await fetch(url);
  return response.json();
}

// Check logged in
const loggedInUser = await getFetch('/api/login')