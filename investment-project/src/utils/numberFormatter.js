export const formatRupees = (amount) => {
  return Number(amount).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
};
