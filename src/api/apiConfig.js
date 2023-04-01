const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4bb73409f3970ca9923f1264a3af4e23',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;