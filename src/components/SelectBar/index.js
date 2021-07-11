import React from "react";

function SelectBar(props) {
  return (
    <div style={styles.bar}>
      <div style={styles.tab}>Trending</div>
      <div style={{ padding: "" }}>Popular</div>
      <div style={{ marginRight: "11px" }}>We Recommend</div>
    </div>
  );
}

const styles = {
  bar: {
    display: "flex",
    height: "50px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: 600,
    marginBottom: "25px",
    flexWrap: "wrap",
  },
  tab: {
    padding: "8px",
    marginLeft: "11px",
    color: "white",
    backgroundColor: "#AB7D6F",
    borderRadius: "8px",
    boxShadow:
      "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
  },
};
export default SelectBar;
