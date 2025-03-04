const routes = {
  home: "/",
  worldMap: "/worldMap",
  country: (continent: string, country: string) =>
    `/worldMap/${continent}/${country}`,
  signIn: "/signIn",
};
export default routes;
