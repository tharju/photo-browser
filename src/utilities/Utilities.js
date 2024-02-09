const getUserId = (pathname) => {
  const number = parseInt(pathname.replace("/users/", ""), 10);
  return isNaN(number) ? null : number;
};

export { getUserId };
