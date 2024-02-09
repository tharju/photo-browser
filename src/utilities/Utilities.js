const getUserId = (pathname) => {
  const number = parseInt(pathname.replace("/users/", ""), 10);
  return isNaN(number) ? null : number;
};

const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export { getUserId, delay };
