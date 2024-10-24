const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjY2NTNjY2UwM2M1MjA5NmRmMjM1YWQ4ZTE1MzhiNiIsIm5iZiI6MTcyOTEyMzgxOS42NzMzLCJzdWIiOiI2NzBmYTQ5YjA0MzMxZGI0YjExMjhjZjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.K-bdl-p9bDIyUk2l6xM2l328hnQ49Z0FXCNfwpaWrxk'
    }
};

export async function getMovieData(url) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (err) {
        console.error(err);
    }
}
