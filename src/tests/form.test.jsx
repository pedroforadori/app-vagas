import { fireEvent, getAllByRole, getByDisplayValue, getByTestId, getByText, render, screen } from "@testing-library/react"
import Form from "../components/form"

describe("form", () => {
    it("should render correctly", () => {
        render(<Form />)

        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("Vue")).toBeInTheDocument();
        expect(screen.getByText("Angular")).toBeInTheDocument();
        expect(screen.getByTestId("counter")).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Enviar"})).toBeInTheDocument();
    })

    it("should disable submit", () => {
        render(<Form />)

        expect(screen.getByRole("button", {name: "Enviar"})).toBeDisabled();
    })

    it('shold counter add', async () => {
      const { getByTestId } = render(<Form />);
      const btnPlus = getByTestId("plus")
      fireEvent.click(btnPlus)

      expect(screen.getByTestId("valueSticker")).toHaveValue(1)
    });

    it('shold counter minus', async () => {
      const { getByTestId } = render(<Form />);
      const btnPlus = getByTestId("plus")
      fireEvent.click(btnPlus)

      const btnMinus = getByTestId("minus")
      fireEvent.click(btnMinus)

      expect(screen.getByTestId("valueSticker")).toHaveValue(0)
    });

})
