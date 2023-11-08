import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import { Chart } from "chart.js/auto";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, coinHistoryy }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistoryy?.data?.history.length; i += 1) {
    coinPrice.push(coinHistoryy?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistoryy?.data?.history.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistoryy?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
