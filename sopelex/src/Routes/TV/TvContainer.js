import React from "react";
import TvPresenter from "./TvPresenter";
import { tvApi } from "api";

export default class TvContainer extends React.Component {
  state = {
    topRated: null,
    airingToday: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentWillMount() {
    try {
      const { data: { results: topRated } } = await tvApi.topRated();
      const { data: { results: airingToday } } = await tvApi.airingToday();
      const { data: { results: popular } } = await tvApi.popular();
      this.setState({ topRated, popular, airingToday });
    } catch (error) {
      this.setState({ error: "Not found TV shows" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, airingToday, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      <TvPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
