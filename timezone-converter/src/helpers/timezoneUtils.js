export const allTimezones = [
  "UTC",
  "IST",
  "PST",
  "EST",
  "CST",
  "MST",
  "BST",
  "CET",
  "JST",
  "AEST",
 
];

export const getOffsetFromTimezone = (timezone) => {
  switch (timezone) {
    case "UTC": return 0;
    case "IST": return 5.5;
    case "PST": return -8;
    case "EST": return -5;
    case "CST": return -6;
    case "MST": return -7;
    case "BST": return 1;
    case "CET": return 1;
    case "JST": return 9;
    case "AEST": return 10;
    default: return null;
  }
};
