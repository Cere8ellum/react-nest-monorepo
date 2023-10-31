import * as styles from "./home.module.scss";
import React from "react";
import { TResponse } from "@monorepo/types/TResponse";
import { useAppSelector, useAppDispatch } from "../../core/store/redux/hooks";
import * as reduxStore from "../../core/store/redux/slices/helloSlice";
import { helloStore as mobxStore } from "../../core/store/mobx";
import { observer } from "mobx-react";
import reactImage from "../../assets/images/react.svg";
import Stack from "@mui/material/Stack";
import { fetchHello } from "../../core/api/api";
import Grid from "@mui/material/Grid";
import DynamicAlert, {
  ESeverity,
} from "../../components/DynamicAlert/dynamicAlert";
import DynamicButton, {
  EColor,
} from "../../components/DynamicButton/dynamicButton";

const Home = () => {
  const dispatch = useAppDispatch();
  const selectedPosts = useAppSelector(reduxStore.helloSelector);

  const reduxLoading = selectedPosts.loading;
  const reduxResult = selectedPosts.result;
  const reduxError = selectedPosts.error;

  const mobxLoading = mobxStore.loading;
  const mobxResult = mobxStore.result;
  const mobxError = mobxStore.error;

  const getPostsRedux = async () => {
    dispatch(reduxStore.reset());
    dispatch(reduxStore.setLoading(true));

    return await fetchHello()
      .then((json: TResponse<string>) => {
        dispatch(reduxStore.setLoading(false));
        if (!json.isError) {
          dispatch(reduxStore.setSuccess(json.data));
        } else {
          dispatch(reduxStore.setError(json.errorMessage));
        }
      })
      .catch((e: Error) => {
        dispatch(reduxStore.setLoading(false));
        dispatch(reduxStore.setError(e.message));
      });
  };

  const getPostsMobx = async () => {
    mobxStore.reset();
    mobxStore.setLoading(true);

    return await fetchHello()
      .then((json: TResponse<string>) => {
        mobxStore.setLoading(false);

        if (!json.isError) {
          mobxStore.setSuccess(json.data);
        } else {
          mobxStore.setError(json.errorMessage);
        }
      })
      .catch((e: Error) => {
        mobxStore.setLoading(false);
        mobxStore.setError(e.message);
      });
  };

  return (
    <>
      <h2>Home page</h2>
      <div className={styles.image}>
        <img src={reactImage} alt="Logo of the React" />
      </div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        marginTop={3}
      >
        <Grid item>
          <DynamicButton
            isLoading={reduxLoading}
            title="Get Hello Using Redux"
            color={EColor.apple}
            handleClick={getPostsRedux}
          />
        </Grid>

        <Grid item>
          <DynamicButton
            isLoading={mobxLoading}
            title="Get Hello Using Mobx"
            color={EColor.peach}
            handleClick={getPostsMobx}
          />
        </Grid>
      </Grid>

      <Stack sx={{ width: "100%" }} spacing={2} marginTop={5}>
        {/* Redux result */}
        {reduxError && (
          <DynamicAlert
            isVisible={true}
            title="Redux Fetch Error"
            text={reduxError}
            type={ESeverity.error}
            onHide={() => dispatch(reduxStore.reset())}
          />
        )}
        {reduxResult && (
          <DynamicAlert
            isVisible={true}
            title="Redux Fetch Success"
            text={reduxResult}
            type={ESeverity.success}
            onHide={() => dispatch(reduxStore.reset())}
          />
        )}

        {/* Mobx result */}
        {mobxError && (
          <DynamicAlert
            isVisible={true}
            title="Mobx Fetch Error"
            text={mobxError}
            type={ESeverity.error}
            onHide={mobxStore.reset}
          />
        )}
        {mobxResult && (
          <DynamicAlert
            isVisible={true}
            title="Mobx Fetch Success"
            text={mobxResult}
            type={ESeverity.success}
            onHide={mobxStore.reset}
          />
        )}
      </Stack>
    </>
  );
};

export default observer(Home);
