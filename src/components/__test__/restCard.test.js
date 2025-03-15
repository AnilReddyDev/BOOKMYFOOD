import { render, screen } from "@testing-library/react";
import RestCard, { withTopRatedRest } from "../RestCard";
import mockData from "./mocks/mockData.json";
import "@testing-library/jest-dom";

it("should render the restCard component", () => {
  render(<RestCard resData={mockData} />);

  const name = screen.getByText("Subway");
  expect(name).toBeInTheDocument();
});

it("should render the restCard with higher order component", () => {
  const RestCardTopRated = withTopRatedRest(RestCard);
  render(<RestCardTopRated resData={mockData} />);
  const topRated = screen.getByText("Top Rated");
  expect(topRated).toBeInTheDocument();
});
