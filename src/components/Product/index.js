import React from "react";
import image from "../../images/im3.png";
import { useHistory } from "react-router-dom";

function Product(props) {
  const { price, name, id } = props.product;
  console.log(price, name);
  let history = useHistory();
  const handleDetail = () => {
    history.push(`/detail/${id}`);
  };
  return (
    <div style={styles.product} onClick={handleDetail}>
      <div style={styles.imagediv}>
        <img
          style={{
            height: "88%",
            width: "82%",
            borderRadius: "inherit",
            paddingLeft: "13px",
          }}
          src={image}
          alt={""}
        />
      </div>
      <div style={{ marginTop: "-12px" }}>{name}</div>
      <div style={{ marginTop: "7px", color: "#BA9F98" }}>$ {price}</div>
    </div>
  );
}

let styles = {
  product: {
    display: "flex",
    flexDirection: "column",
    height: "195px",
    width: "175px",
    marginBottom: "10px",
    borderRadius: "12px",
    backgroundColor: "#FCF5F5",
    alignItems: "center",
    fontWeight: 600,
    boxShadow:
      "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19)",
  },
  imagediv: {
    height: "79%",
    borderRadius: "16px",
  },
};
export default Product;
