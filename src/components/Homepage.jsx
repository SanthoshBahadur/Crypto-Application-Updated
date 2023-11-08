import React from "react";
import millify from "millify"; // package to format numbers
import { Typography, Row, Col, Statistic } from "antd";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";




const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  // isFetching is given by redux.
  if (isFetching) return "Loading.....";

  // console.log(data);
  return (
    <>
 
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      {/* so span here is taking half the width of the screen and statistic is a self closing tag
      and the value over here is 5 for now. later on we are going to fetch the real world data. */}

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
    // simplified is a variable by which we can show only the top 10 currencies or the news
  ); // simple react fragments.
};

export default Homepage;
