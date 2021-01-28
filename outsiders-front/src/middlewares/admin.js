// Package imports
import axios from "axios";

// Local imports
import apiUrl from "./url";
import { createSportSuccess } from "../store/action";

// request cat/etc
const admin = (store) => (next) => (action) => {
  const {
    admin: { sportNameCreate, sportNameModify, sportDescriptionCreate, sportDescriptionModify, category_id, id },
  } = store.getState();

  switch (action.type) {

    case 'AUTH_ADMIN': {

      const { auth: { email, password } } = store.getState();

      const config = {
        method: 'post',
        url: `${apiUrl}/admin`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      };

      axios(config)
        .then((response) => {
          store.dispatch({
            type: 'ADMIN_SUCCESS',
            token: response.data.token,
            ...response.data.data
          });          
        }).catch((error) => {
          console.log(error);
        });
      break;
    };

    case "CREATE_SPORT": {
      const config = {
        method: "post",
        url: `${apiUrl}/sport`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          title: sportNameCreate,
          description: sportDescriptionCreate,
          category_id,
        },
      };

      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch(createSportSuccess(response.data.data));
          }
        })
        .catch((error) => {
          console.log("Oups ! ", error);
        });
      break;
    }

    case "MODIFY_SPORT": {
      const config = {
        method: "patch",
        url: `${apiUrl}/sport/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          title: sportNameModify,
          description: sportDescriptionModify,
          category_id,
        },
      };

      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch({
              type: 'MODIFY_SPORT_SUCCESS',
              message: `Le nouveau sport ${response.data.data[0].title} a bien été modifié.`
          });
          }
        })
        .catch((error) => {
          console.log("Oups ! ", error);
        });
      break;
    }

    case "DELETE_SPORT": {
      console.log(id);
      const config = {
        method: "delete",
        url: `${apiUrl}/sport/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          category_id,
        },
      };

      axios(config)
        .then((response) => {
          if (response.status !== 200) {
            throw response.error;
          } else {
            store.dispatch({
              type: "DELETE_SPORT_SUCCESS",
              message: `Le sport ${response.data.data[0].title} a bien été supprimé.`,
            });
          }
        })
        .catch((error) => {
          console.log("Oups ! ", error);
        });
      break;
    }

    default:
      next(action);
  }
};

export default admin;
