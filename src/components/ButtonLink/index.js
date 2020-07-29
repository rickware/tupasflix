import React from "../NotFound/node_modules/react";

function ButtonLink(props) {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

export default ButtonLink;