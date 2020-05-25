import { default as Colors, default as colors } from "src/values/colors";
import { default as dimens, width } from "src/values/dimensions";

const viewParentBase = {
  flex: 1,
  backgroundColor: colors.background,
  flexDirection: "column"
};
const viewBase = { backgroundColor: Colors.linesPrimary };

export default {
  viewHorizontal: {
    ...viewBase,
    width: "100%",
    height: dimens.lineThickness
  },
  viewVertical: {
    ...viewBase,
    height: "100%",
    width: dimens.lineThickness
  },
  viewParent: {
    ...viewParentBase,
    backgroundColor: Colors.background
  },
  viewParentPadding: {
    ...viewParentBase,
    padding: dimens.space_small
  },
  buttonDefault: {
    padding: 35,
    backgroundColor: Colors.primary
  },
  buttonDefaultSmall: {
    padding: 35,
    backgroundColor: Colors.primary
  },
  toolbar: {
    backgroundColor: Colors.primary
  },

  //
  chatio: {
    borderColor: 'red',
    borderWidth: 1,
  },

  //
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  welcomeImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
  },
  welcomeText: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
  },
  ivBig: {
    width: dimens.ivBig,
    height: dimens.ivBig
  },
  ivMedium: {
    width: dimens.ivMedium,
    height: dimens.ivMedium
  },

  // custom---------------------------------------------------------------------------------------------------------

  vegIcon: {
    width: 10,
    height: 10
  },

  modalBottomCart: {
    justifyContent: "center",
    alignItems: "center",
    height: 400
  },

  modalPayment: {
    justifyContent: "center",
    backgroundColor: "transparent",
    alignItems: "center",
    height: 220
  },

  modalAppDialog: {
    backgroundColor: "transparent",
    alignItems: "center",
    padding: width(5),
    height: "100%",
    justifyContent: "center"
  },

  modelMenuList: {
    backgroundColor: "transparent",
    alignItems: "center",
    padding: width(5),
    height: '100%',
    justifyContent: "flex-end"
  },

  buttonMenuView: {
    position: "absolute",
    borderRadius: 15,
    height: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.red,
    bottom: 10,
    right: 10
  },

  buttonMenuIcon: {
    width: 13,
    height: 13,
    marginRight: 5
  },

  borderBlack: {
    margin: dimens.space_large,
    borderRadius: 1,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.black
  }
};
