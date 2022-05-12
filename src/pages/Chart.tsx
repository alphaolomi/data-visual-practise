import Page from "../layout/Page";
import { Line } from "react-chartjs-2";

/**
 * About Page
 * @returns {JSX.Element}
 */
const Chartjs = () => {
  return (
    <Page>
      <h1>Home</h1>
      <Line
        datasetIdKey="id"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          //   @ts-ignore
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
      />
    </Page>
  );
};

export default Chartjs;
