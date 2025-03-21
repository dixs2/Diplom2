const routes = {
  home: "/",
  worldMap: "/worldMap",
  myWorldMap: "/myWorldMap",
  country: (continent: string, country: string) =>
    `/worldMap/${continent}/${country}`,
  signIn: "/signIn",
  registration: "/registration",
};
export default routes;
