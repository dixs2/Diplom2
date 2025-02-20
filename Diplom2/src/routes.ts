const routes = {
  home: "/",
  worldMap: "/worldMap",
  country: (country: string) => `/worldMap/${country}`,
  signIn: "/signIn",
};
export default routes;
