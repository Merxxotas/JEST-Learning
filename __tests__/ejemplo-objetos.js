const cliente = {
  nombre: "Brayan Marin Guirales",
  balance: 500,
};

describe("Testing al Cliente", () => {
  test("El cliente es premium", () => {
    expect(cliente.balance).toBeGreaterThan(400);
  });

  test("Es Brayan Marin Guirales", () => {
    expect(cliente.nombre).toBe("Brayan Marin Guirales");
  });

  test("No es otro cliente", () => {
    expect(cliente.nombre).not.toBe("Samuel Cortes Guirales");
  });

  test("No tiene 500", () => {
    expect(cliente.balance).not.toBe(400);
  });
});
