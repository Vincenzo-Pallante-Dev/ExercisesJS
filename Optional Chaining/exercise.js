const order = {
  name: "Greg",
  city: "",
};

if (
  order &&
  order.customer &&
  order.customer.address &&
  !order.customer.address.city
) {
  console.log("City is required");
}

const print = order?.city;
if (print == false) {
  console.log("City is required");
}
