const isAuthorized = () => {
    const token = localStorage.getItem("isLoggedIn") === "true";
    
    
    return !!token; 
};

export default isAuthorized;