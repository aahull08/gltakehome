import { fireEvent, render, screen } from "@testing-library/react";
import Topbar from "./Topbar";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Display the Website Name on Topbar", () => {
  render(<Topbar />);
  const title = screen.getByText("Find Reposatories");
  expect(title).toBeInTheDocument();
});

test("Click fires of the onClick funcion", async () => {
  const onClick = jest.fn();
  render(<Topbar />);
  const title = screen.getByRole("button");

  fireEvent.click(title);
  console.log(title);
  console.log(onClick.mock.calls.length);
  expect(onClick.mock.calls.length).toBe(1);
});
