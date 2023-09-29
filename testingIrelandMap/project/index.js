document.addEventListener("DOMContentLoaded", function () {
  const svg = document.querySelector("svg");
  const counties = {
    "IE-WD": "Waterford & Wexford",
    "IE-TA": "Tipperary",
    "IE-SO": "Mayo, Sligo & Leitrim",
    "IE-OY": "Laois & Offaly",
    "IE-MH": "Louth & Meath",
    "IE-LD": "Longford & Westmeath",
    "IE-KY": "Kerry",
    "IE-KK": "Kilkenny & Carlow",
    "IE-KE": "Kildare & Wicklow",
    "IE-G": "Galway & Roscommon",
    "IE-D": "Dublin",
    "IE-DL": "Donegal",
    "IE-CO": "Cork",
    "IE-CE": "Limerick & Clare",
    "IE-CN": "Cavan & Monaghan",
  };

  for (const [id, name] of Object.entries(counties)) {
    const path = document.querySelector(`#${id.toLowerCase()}`);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "0");
    text.setAttribute("y", "0");
    text.setAttribute("fill", "#000");
    text.setAttribute("font-size", "12");
    text.setAttribute("font-weight", "bold");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute(
      "transform",
      `translate(${getCountyCenterX(id)}, ${getCountyCenterY(id)})`
    );

    const attributesByCounty = {
      Kerry: { x: 30 },
      "Cavan & Monaghan": { x: 40 },
      "Galway & Roscommon": { x: 60, y: -35 },
      "Mayo, Sligo & Leitrim": { x: -10, y: 20 },
      "Limerick & Clare": { x: 20, y: 30 },
      "Louth & Meath": { x: 20, y: -20 },
      "Longford & Westmeath": { x: 30, y: 20, fill: "white" },
      "Kilkenny & Carlow": { x: 30, y: -20, fill: "white" },
      "Kildare & Wicklow": { x: 30, y: 10 },
      "Waterford & Wexford": { x: 60, y: -15 },
      Cork: { x: 30, y: -20, fill: "white" },
      Dublin: { fill: "white" },
    };

    const attributes = attributesByCounty[name]; // Remove .toLowerCase()
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        text.setAttribute(key, value);
      });
    }

    // Capitalize the first letter of each word in the county name
    const capitalizedCountyName = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    text.textContent = capitalizedCountyName;

    // Add external link to county text
    let link;
    switch (name.toLowerCase()) {
      case "dublin":
        link = "https://";
        break;
      case "galway & roscommon":
        link = "https://";
        break;
      case "cork":
        link = "https://";
        break;
      case "longford & westmeath":
        link = "https://";
        break;
      case "waterford & wexford":
        link = "https://";
        break;
      case "kildare & wicklow":
        link = "https://";
        break;
      case "tipperary":
        link = "https://";
        break;
      case "mayo, sligo & leitrim":
        link = "https://";
        break;
      case "laois & offaly":
        link = "https://";
        break;
      case "cavan & monaghan":
        link = "https://";
        break;
      case "louth & meath":
        link = "https://";
        break;
      case "kerry":
        link = "https://";
        break;
      case "kilkenny & carlow":
        link = "https://";
        break;
      case "donegal":
        link = "https://";
        break;
      case "limerick & clare":
        link = "https://";
        break;
      default:
        link = "#";
    }

    // Set onclick event for county text to redirect to external link
    text.onclick = function () {
      window.open(link, "_blank");
    };

    svg.appendChild(text);
  }

  // Helper function to get the center X coordinate of a county
  function getCountyCenterX(id) {
    const path = document.querySelector(`#${id}`);
    const bbox = path.getBBox();
    return bbox.x + bbox.width / 2;
  }

  // Helper function to get the center Y coordinate of a county
  function getCountyCenterY(id) {
    const path = document.querySelector(`#${id}`);
    const bbox = path.getBBox();
    return bbox.y + bbox.height / 2 + 5;
  }
});
