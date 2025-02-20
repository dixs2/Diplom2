export const Actions = {
  SHOW_NAV_MODAL: "SHOW_NAV_MODAL",
  HIDE_NAV_MODAL: "HIDE_NAV_MODAL",
};

export const showNavModal = () => ({
  type: Actions.SHOW_NAV_MODAL,
});
export const hideNavModal = () => ({
  type: Actions.HIDE_NAV_MODAL,
});
