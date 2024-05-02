
export const invoiceData = {
  id: 1,
  name: "Componente de PC",
  client: {
    name: "Andres",
    lastName: "Milano",
    address: {
      country: "Canada",
      city: "Calgary",
      street: "Byron street",
      number: 15,
    },
    company: {
      name: 'new age',
      fiscalNumber: 123456
    },
    items: [
      {
        id:1,
        product:'CPU intel 7',
        price: 500,
        quantity: 15
      },
      {
        id:2,
        product:'AMD Ryzen 7',
        price: 799,
        quantity: 20
      },
      {
        id:3,
        product:'AMD radeon ',
        price: 699,
        quantity: 10
      }
    ]
  }
}
