const cliente = {
  nombre: "Brayan 1",
  balance: 500,
  tipo: "Premium",
};

describe("Testing al cliente", () => {
  test("Es Brayan 1", () => {
    expect(cliente).toMatchSnapshot();
  });
});
