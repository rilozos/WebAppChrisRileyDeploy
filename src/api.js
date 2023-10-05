const getNews = async (keyword) => {
    const url = 'https://newsapi.org/v2/top-headlines';
    const category = 'technology';
    const language = 'en';
    let keywordInput = keyword;

    const accessToken = '754ba1aff130400e9c28d62847c83092';

    const response = await fetch(`${url}?category=${category}&language=${language}&q=${keywordInput}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': accessToken,
            'Authorization' : `Bearer ${accessToken}`
        }
    })

    const json = await response.json();
    return json;
};

export { getNews };
