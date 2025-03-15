import { render, screen, act, fireEvent } from "@testing-library/react";
import mockData from "./mocks/restListMockData.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
const mockGeolocation = {
  getCurrentPosition: jest.fn(
    (success) => success({ coords: { latitude: 17.385, longitude: 78.4867 } }) // Mock lat/lon (Hyderabad)
  ),
};

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});
global.navigator.geolocation = mockGeolocation;
//integration testing
it("should get the filtered restaurant list based on search input text ice", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const search = screen.getByRole("button", { name: "Search" });

  expect(search).toBeInTheDocument();

  const BeforeSearchRestCards = screen.getAllByTestId("resCard");

  expect(BeforeSearchRestCards.length).toBe(20);

  const searchText = screen.getByTestId("inputText");
  fireEvent.change(searchText, { target: { value: "ice" } });
  fireEvent.click(search);

  const AfterSearchRestCards = screen.getAllByTestId("resCard");
  expect(AfterSearchRestCards.length).toBe(3);
});

it("should get the filtered restaurant list based on top restaurants button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const button = screen.getByRole("button", { name: "Top Rated Restaurants" });
  fireEvent.click(button);

  const AfterFilterRestCards = screen.getAllByTestId("resCard");
  expect(AfterFilterRestCards.length).toBe(8);
});
