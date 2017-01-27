export const baseUrl = (process.env.NODE_ENV === 'dev' ? 'http://127.0.0.1:8080' : 'https://vegan-heroes.herokuapp.com');
export const reverseSortSuffix = '-alt';
export const reverseIdSortKey = 'id'+reverseSortSuffix;
export const defaultSortMethod = reverseIdSortKey;
export const siteName = "Considerals"; // "Vegan Heroes"
