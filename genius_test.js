const headers = {
	authorization:
		"Bearer KmAeajKTRYgGjwFoLhvW0xxXx5x6tYemsAMslrMvwEAeotTGB4Sa60AnsCg_KqNM",
  "Content-Type": "application/json",
};

const keyWord = "лампочка";

fetch(`https://api.genius.com/search?q=${keyWord}`, {
	method: "GET",
	headers: headers,
})
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject(`Ошибка: ${response.status}`);
		}
	})
	.then((data) => console.log(data))
  .catch((err) => console.log(err))
