const routes = {
  home: "/",
  worldMap: "/worldMap",
  country: (continent: string, country: string) =>
    `/worldMap/${continent}/${country}`,
  myWorldMap: "/myWorldMap",
  myCountry: (continent: string, country: string) =>
    `/myWorldMap/${continent}/${country}`,
  signIn: "/signIn",
  registration: "/registration",
  profile: "/profile",
  changeProfile: "profile/changeProfile",
  allUsers: "/allUsers",
  user: (userName: string) => `/allUsers/${userName}`,
  userCountry: (userName: string, continent: string, country: string) =>
    `/allUsers/${userName}/${continent}/${country}`,
};
export default routes;
