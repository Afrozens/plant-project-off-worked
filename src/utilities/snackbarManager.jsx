import { useSnackbar } from "notistack";

export const snackbarUtilities = {
  toast(msg, variant) {
    useSnackbar().enqueueSnackbar(msg, { variant });
  },
  success(msg) {
    this.toast(msg)
  },
  error(msg) {
    this.toast(msg)
  }
};
