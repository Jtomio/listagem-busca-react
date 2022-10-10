import React from "react";
import * as C from "./styles";

function ListItem(props) {
  return (
    <C.ItemLink href={props.url} title="Clique aqui para comprar">
      <C.ItemContainer>
        <C.Thumbnail src={props.image} />
        <C.TitlePane>{props.title}</C.TitlePane>
        <C.PricePane>{props.price}</C.PricePane>
        <button variant="primary">Comprar</button>
      </C.ItemContainer>
    </C.ItemLink>
  );
}

export default ListItem;
