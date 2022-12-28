import React from "react";
import * as Types from "../../../../types";

const write = (actions: Types.Action[] = []) => {
  const events: any = {};

  actions.forEach((action) => {
    if (action.type === "href") {
      events["href"] = action.url;
      return;
    }
    events[action.type] = (e: React.ChangeEvent) => {
      fire(action, e);
    };
  });

  return events;
};

const fire = (action: Types.Action, e: React.ChangeEvent) => {
  console.log(action, e.target);
};

export { write };
