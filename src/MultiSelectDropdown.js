import React, { useState } from "react";
import { nbaTeams } from "./list1";
function DropdownItem({
  nbaTeams,
  collapse,
  setSelectedOptions,
  singleSelect,
}) {
  const display = collapse ? "none" : "block";
  const [bgColors, setBgColors] = useState([
    ...new Array(nbaTeams.length).fill(""),
  ]);

  function handleChange(e, index) {
    let checked = e.target.checked;
    let value = e.target.value;
    if (!singleSelect) {
      handleBgColor(index, checked);
    }
    setSelectedOptions((array) => {
      let current = array;
      if (singleSelect) {
        return [value];
      } else {
        if (checked) {
          return [...array, value];
        } else {
          current = current.filter((item) => item !== value);
          return [...current];
        }
      }
    });
  }

  function handleBgColor(index, checked) {
    let array = bgColors;
    if (checked) {
      array[index] = "#18dcff";
      setBgColors([...array]);
    } else {
      array[index] = "";
      setBgColors([...array]);
    }
  }

  return (
    <div className="item-container" style={{ display: display }}>
      <div>
        {nbaTeams.map((item, index) => {
          return (
            <label
              className="item"
              key={item}
              style={{ backgroundColor: bgColors[index] }}
            >
              <input
                type={singleSelect ? "radio" : "checkbox"}
                style={{
                  marginRight: "10px",
                  display: singleSelect ? "none" : "block",
                }}
                onChange={(e) => {
                  handleChange(e, index);
                }}
                value={item}
                name="radio"
              />
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );
}

function MultiSelectDropdown({ singleSelect }) {
  const [collapse, setCollapse] = useState(true);
  const [selectedOption, setSelectedOptions] = useState([]);
  function handleToggle() {
    let current = collapse;
    setCollapse(!current);
  }
  return (
    <div className="app-container">
      <fieldset className="dropdown-title" onClick={handleToggle}>
        <legend>NBA teams</legend>
        <div className="selected-options-container">
          <div className="selected-options">
            {selectedOption.length ? (
              selectedOption.map((item) => (
                <div key={item}>
                  {item}
                  {!singleSelect && ","}
                </div>
              ))
            ) : (
              <div>NONE</div>
            )}
          </div>
        </div>
        <div style={{ position: "absolute", right: "5px" }}>
          {collapse ? <div>▼</div> : <div>▲</div>}
        </div>
      </fieldset>

      <DropdownItem
        nbaTeams={nbaTeams}
        collapse={collapse}
        setSelectedOptions={setSelectedOptions}
        singleSelect={singleSelect}
      />
    </div>
  );
}

export default MultiSelectDropdown;
