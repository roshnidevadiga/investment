//category and its form values
const CATEGORY_STOCK = "stock";
const CATEGORY_FD = "fd";
const CATEGORY_MUTUAL = "mutual";
const CATEGORY_RD = "rd";
const CATEGORY_TAX_SAVING_FD = "tax_saving_fd";
const CATEGORY_LIC = "lic";
const CATEGORY_NPS = "nps";
const CATEGORY_SMALLCASE = "smallcase";
const CATEGORY_OTHER = "other";

const INVESTMENT_CATEGORIES = [
  CATEGORY_STOCK,
  CATEGORY_FD,
  CATEGORY_MUTUAL,
  CATEGORY_RD,
  CATEGORY_TAX_SAVING_FD,
  CATEGORY_LIC,
  CATEGORY_NPS,
  CATEGORY_SMALLCASE,
  CATEGORY_OTHER,
];

export const INVESTMENT_CATEGORY_TO_NAME_MAP = {
  [CATEGORY_FD]: "FD",
  [CATEGORY_MUTUAL]: "Mutual Fund",
  [CATEGORY_RD]: "RD",
  [CATEGORY_TAX_SAVING_FD]: "Tax Saving FD",
  [CATEGORY_LIC]: "LIC",
  [CATEGORY_NPS]: "NPS",
  [CATEGORY_SMALLCASE]: "Small Case",
  [CATEGORY_OTHER]: "Other",
  [CATEGORY_STOCK]: "Stock",
};

export const INVESTMENT_CATEGORY_TO_COLOR_MAP = {
  [CATEGORY_FD]: "#00bcd4",
  [CATEGORY_MUTUAL]: "#00bcd4",
  [CATEGORY_RD]: "#00bcd4",
  [CATEGORY_TAX_SAVING_FD]: "#00bcd4",
  [CATEGORY_LIC]: "#00bcd4",
  [CATEGORY_NPS]: "#00bcd4",
  [CATEGORY_SMALLCASE]: "#00bcd4",
  [CATEGORY_OTHER]: "#00bcd4",
  [CATEGORY_STOCK]: "#00bcd4",
};
