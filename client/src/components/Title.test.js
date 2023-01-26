import { render, screen } from "@testing-library/react";
import Title from "./Title";

test("Display the Company Name as the title", () => {
  let companyName = "Netflix";
  render(<Title companyName={companyName} />);
  const title = screen.getByText("Netflix");
  expect(title).toBeInTheDocument();
});
