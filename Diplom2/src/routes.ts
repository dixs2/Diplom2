const routes = {
  home: "/",
  worldMap: "/worldMap",
  continent: (continent: string) => `/worldMap/${continent}`,
  signIn: "/signIn",
};
export default routes;
