// Package imports
import axios from "axios";

// Local imports
import apiUrl from "./url";
import { createSportSuccess } from "../store/action";

// request cat/etc
const admin = (store) => (next) => (action) => {
  const {
    admin: { sportName, sportDescription, category_id, id },
  } = store.getState();

  switch (action.type) {
    case "CREATE_SPORT": {
      const config = {
        method: "post",
        url: `${apiUrl}/sport`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          title: sportName,
          description: sportDescription,
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
          title: sportName,
          description: sportDescription,
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
