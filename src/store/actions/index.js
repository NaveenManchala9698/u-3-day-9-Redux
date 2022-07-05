export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const ADD_JOBS = "ADD_JOBS";

export const addToFav = (company) => ({
  type: ADD_TO_FAV,
  payload: company,
});

export const removeFromFav = (company) => ({
  type: REMOVE_FROM_FAV,
  payload: company,
});

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}`
      );

      if (response.ok) {
        const { data } = await response.json();

        dispatch({
          type: ADD_JOBS,
          payload: data,
        });
      } else {
        console.log("Error!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
