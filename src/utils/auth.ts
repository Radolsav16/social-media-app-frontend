export const setLoacalStorageInfo = ({accessToken,userId}:{accessToken:string,userId:string}) => {
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('userId',userId);

}



export const getAcessToken = () => localStorage.getItem('accessToken');
export const getUserId = () => localStorage.getItem('userId')

export const deleteAccessTokenInfo = () => {
    localStorage.removeItem('accessToken');
}