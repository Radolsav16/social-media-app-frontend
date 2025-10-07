export const setAccessTokenInfo = ({accessToken}) => {
    localStorage.setItem('accessToken',accessToken);
}


export const getAcessToken = () => localStorage.getItem('accessToken');


export const deleteAccessTokenInfo = () => {
    localStorage.removeItem('accessToken');
}